import {
  Body,
  Controller,
  Post,
  Res,
  UsePipes,
  HttpStatus,
  ValidationPipe,
  Get,
  UnauthorizedException
} from '@nestjs/common'
import type { Response } from 'express'
import { Public, UserAgent, Cookie } from '~/common/decorators'
import type { BackResponse } from '~/models/BackResponseModel'
import type { UserDto } from '~/modules/user/dto'
import { TokenService } from '~/modules/token/token.service'
import getErrorFromString from '~/helpers/getErrorFromString'
import { AuthService } from './auth.service'
import type { SignupDto, SigninDto } from './dto'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '~/modules/token/config'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly tokenService: TokenService
  ) {}

  @Public()
  @Post('/signup')
  @UsePipes(ValidationPipe)
  async signup(
    @Body() form: SignupDto,
    @Res({ passthrough: true }) res: Response,
    @UserAgent() agent: string
  ): Promise<BackResponse<UserDto | null>> {
    try {
      const { user, tokens } = await this.authService.signup(form, agent)

      this.tokenService.setTokenToCookie(tokens, res)

      return {
        result: true,
        statusCode: HttpStatus.OK,
        data: user,
        message: []
      }
    } catch (e) {
      return {
        result: false,
        statusCode: e.status,
        message: getErrorFromString(e.message),
        data: null
      }
    }
  }

  @Public()
  @Post('/signin')
  @UsePipes(ValidationPipe)
  async signin(
    @Body() form: SigninDto,
    @Res({ passthrough: true }) res: Response,
    @UserAgent() agent: string
  ): Promise<BackResponse<UserDto | null>> {
    try {
      const { user, tokens } = await this.authService.signin(form, agent)

      this.tokenService.setTokenToCookie(tokens, res)

      return {
        result: true,
        statusCode: HttpStatus.OK,
        data: user,
        message: []
      }
    } catch (e) {
      return {
        result: false,
        statusCode: e.status,
        message: getErrorFromString(e.message),
        data: null
      }
    }
  }

  @Get('/signout')
  async signout(
    @Cookie(REFRESH_TOKEN) refreshToken: string,
    @Res({ passthrough: true }) res: Response
  ) {
    try {
      if (!refreshToken) throw new UnauthorizedException()

      await this.tokenService.deleteRefreshTokenFromDB(refreshToken)
      res.clearCookie(REFRESH_TOKEN)
      res.clearCookie(ACCESS_TOKEN)

      return {
        result: true,
        statusCode: HttpStatus.OK,
        message: [],
        data: null
      }
    } catch (e) {
      return {
        result: false,
        statusCode: e.status,
        message: getErrorFromString(e.message),
        data: null
      }
    }
  }

  @Get('/refresh-tokens')
  async refreshTokens(
    @Cookie(REFRESH_TOKEN) refreshToken: string,
    @Res({ passthrough: true }) res: Response,
    @UserAgent() agent: string
  ): Promise<BackResponse> {
    try {
      if (!refreshToken) throw new UnauthorizedException()

      const token = await this.tokenService.refreshTokens(refreshToken, agent)
      if (!token) throw new UnauthorizedException()

      this.tokenService.setTokenToCookie(token, res)

      return {
        result: true,
        statusCode: HttpStatus.OK,
        message: [],
        data: null
      }
    } catch (e) {
      return {
        result: false,
        statusCode: e.status,
        message: getErrorFromString(e.message),
        data: null
      }
    }
  }
}
