import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const Cookie = createParamDecorator(
  (key: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()

    if (key && key in request.cookies) return request.cookies[key]
    if (key) return null
    return request.cookies
  }
)
