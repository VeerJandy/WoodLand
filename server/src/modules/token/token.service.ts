import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Model } from 'mongoose'
import { Response } from 'express'
import { InjectModel } from '@nestjs/mongoose'
import { add } from 'date-fns'
import { UserService } from '~/modules/user/user.service'
import type { UserForCreateToken, Tokens } from './interfaces'
import { Token, TokenDocument } from './schemas'
import { REFRESH_TOKEN, ACCESS_TOKEN } from './config'

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name) private tokenRepository: Model<Token>,
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}

  private getAccessToken(user: UserForCreateToken): string {
    // If token should be with "Bearer" - change "extractJWT" method in JwtStrategy to req.cookies.accessToken.split(' ')[1]
    return this.jwtService.sign(user, {
      expiresIn: process.env.JWT_ACCESS_EXPIRATION_TIME,
      secret: process.env.JWT_ACCESS_SECRET
    })
  }

  private async getRefreshToken(
    user: UserForCreateToken
  ): Promise<TokenDocument> {
    return this.tokenRepository.findOneAndUpdate(
      {
        userId: user.userId,
        agent: user.agent
      },
      {
        userId: user.userId,
        token: this.jwtService.sign(user, {
          expiresIn: process.env.JWT_REFFRESH_EXPIRATION_TIME,
          secret: process.env.JWT_REFFRESH_SECRET
        }),
        expires: add(new Date(), { months: 1 }),
        agent: user.agent
      },
      { upsert: true, returnOriginal: false }
    )
  }

  public async createTokens(user: UserForCreateToken): Promise<Tokens> {
    const accessToken = this.getAccessToken(user)
    const refreshToken = await this.getRefreshToken(user)

    return { accessToken, refreshToken }
  }

  public setTokenToCookie(tokens: Tokens, res: Response) {
    if (!tokens) throw new UnauthorizedException()
    res.cookie(REFRESH_TOKEN, tokens.refreshToken.token, {
      httpOnly: true,
      sameSite: 'lax',
      expires: new Date(tokens.refreshToken.expires),
      secure: process.env.NODE_ENV === 'production',
      path: '/'
    })
    res.cookie(ACCESS_TOKEN, tokens.accessToken, {
      httpOnly: true,
      sameSite: 'lax',
      expires: add(new Date(), { minutes: 15 }), // TODO: change
      secure: process.env.NODE_ENV === 'production',
      path: '/'
    })
  }

  public async deleteRefreshTokenFromDB(token: string) {
    return this.tokenRepository.deleteOne({ token })
  }

  public async refreshTokens(
    refreshToken: string,
    agent: string
  ): Promise<Tokens> {
    const token = await this.tokenRepository.findOne({
      token: refreshToken
    })

    if (!token) throw new UnauthorizedException()

    await this.tokenRepository.deleteOne({ _id: token._id })
    if (new Date(token.expires) < new Date()) throw new UnauthorizedException()

    const user = await this.userService.findByEmailOrId(String(token.userId))

    return this.createTokens({
      userId: String(user._id),
      role: user.role,
      agent
    })
  }
}
