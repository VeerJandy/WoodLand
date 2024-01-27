import { ConfigService } from '@nestjs/config'
import { JwtModuleAsyncOptions } from '@nestjs/jwt'

export const jwtModuleAsyncOptions: JwtModuleAsyncOptions = {
  inject: [ConfigService],
  useFactory: () => ({
    secret: process.env.JWT_ACCESS_SECRET,
    signOptions: {
      expiresIn: process.env.JWT_ACCESS_EXPIRATION_TIME
    }
  })
}
