import { Module } from '@nestjs/common'
import { MailerModule } from '@nestjs-modules/mailer'
import { MailService } from './mail.service'
import { MailerConfig } from './mail.config'

@Module({
  imports: [
    MailerModule.forRootAsync({
      useClass: MailerConfig
    })
  ],
  controllers: [],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
