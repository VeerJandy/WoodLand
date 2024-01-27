import { Module } from '@nestjs/common'
import { UserModule } from '~/modules/user/user.module'
import { TokenModule } from '~/modules/token/token.module'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { STRATEGIES } from './strategies'
import { GUARDS } from './guards'

@Module({
  imports: [UserModule, TokenModule],
  controllers: [AuthController],
  providers: [AuthService, ...STRATEGIES, ...GUARDS],
  exports: [AuthService]
})
export class AuthModule {}
