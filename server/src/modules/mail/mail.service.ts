import { Injectable } from '@nestjs/common'
import { MailerService } from '@nestjs-modules/mailer'
import type { Mail } from './interfaces'

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(options: Mail) {
    return this.mailerService.sendMail({
      to: options.to,
      from: 'WoodLand',
      subject: options.subject,
      template: options.template,
      context: options.context
    })
  }
}
