import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

// import { APP_GUARD } from '@nestjs/core'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGO_CONNECT_URL)
  ]
  // providers: [
  //   {
  //     provide: APP_GUARD,
  //     useClass: JwtAuthGuard
  //   }
  // ]
})
export class AppModule {}
