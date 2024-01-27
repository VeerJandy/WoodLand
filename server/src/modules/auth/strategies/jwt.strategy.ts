import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import type { Request } from 'express'
import { UserForCreateToken } from '~/modules/token/interfaces'
import { UserService } from '~/modules/user/user.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([JwtStrategy.extractJWT]),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ACCESS_SECRET
    })
  }

  private static extractJWT(req: Request): string | null {
    if (
      req.cookies &&
      'accessToken' in req.cookies &&
      req.cookies.accessToken.length
    ) {
      return req.cookies.accessToken
    }

    return null
  }

  async validate(payload: UserForCreateToken) {
    const user = await this.userService.findByEmailOrId(payload.userId)
    if (!user) throw new UnauthorizedException()
    return payload
  }
}
