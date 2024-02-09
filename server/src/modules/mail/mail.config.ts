import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer'
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'
import * as path from 'path'

export class MailerConfig implements MailerOptionsFactory {
  createMailerOptions(): MailerOptions | Promise<MailerOptions> {
    return {
      transport: {
        host: process.env.MAIL_HOST,
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      },
      template: {
        dir: path.join(__dirname, 'modules/mail/templates'),
        adapter: new HandlebarsAdapter(undefined, {
          inlineCssEnabled: true
        }),
        options: {
          strict: true
        }
      }
    }
  }
}
