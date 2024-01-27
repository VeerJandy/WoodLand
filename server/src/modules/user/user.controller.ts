import {
  Controller,
  Get,
  HttpStatus,
  UnauthorizedException
} from '@nestjs/common'
import type { BackResponse } from '~/models/BackResponseModel'
import { Cookie, Public } from '~/common/decorators'
import { UserForCreateToken } from '~/modules/token/interfaces'
import { REFRESH_TOKEN } from '~/modules/token/config'
import getErrorFromString from '~/helpers/getErrorFromString'
import type { UserDto } from './dto'
import { UserService } from './user.service'
import { JwtService } from '@nestjs/jwt'

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  @Public()
  @Get('/me')
  async me(
    @Cookie(REFRESH_TOKEN) refreshToken: string
  ): Promise<BackResponse<UserDto | null>> {
    try {
      if (!refreshToken) throw new UnauthorizedException()

      const user: UserForCreateToken = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFFRESH_SECRET
      })
      if (!user) throw new UnauthorizedException()

      const me = await this.userService.me(user.userId)

      return {
        result: true,
        statusCode: HttpStatus.OK,
        data: me,
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
}
