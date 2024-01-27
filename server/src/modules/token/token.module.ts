import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { JwtModule } from '@nestjs/jwt'
import { UserModule } from '~/modules/user/user.module'
import { TokenService } from './token.service'
import { Token, TokenSchema } from './schemas'
import { jwtModuleAsyncOptions } from './config'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Token.name, schema: TokenSchema }]),
    JwtModule.registerAsync(jwtModuleAsyncOptions),
    UserModule
  ],
  controllers: [],
  providers: [TokenService],
  exports: [TokenService]
})
export class TokenModule {}
