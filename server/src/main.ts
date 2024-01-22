import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
// import { json, urlencoded } from 'express'
import { NestExpressApplication } from '@nestjs/platform-express'
import { BadRequestException, ValidationPipe } from '@nestjs/common'
import * as path from 'path'
import { AppModule } from './app.module'

async function start() {
  const PORT = process.env.PORT || 8080

  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.setGlobalPrefix('/api')
  app.use(cookieParser())
  // app.enableCors()
  // app.use(json({ limit: '50mb' }))
  // app.use(urlencoded({ limit: '50mb' }))
  app.useStaticAssets(path.join(__dirname, '../'))

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: errors => {
        const result = {}
        errors.map(error => {
          result[error.property] =
            error.constraints[Object.keys(error.constraints)[0]]
        })
        return new BadRequestException([result])
      },
      stopAtFirstError: true
    })
  )

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start()
