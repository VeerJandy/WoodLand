import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { APP_GUARD } from '@nestjs/core'
import { TokenModule } from '~/modules/token/token.module'
import { UserModule } from '~/modules/user/user.module'
import { AuthModule } from '~/modules/auth/auth.module'
import { JwtAuthGuard } from '~/modules/auth/guards'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECT_URL),
    AuthModule,
    UserModule,
    TokenModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule {}
