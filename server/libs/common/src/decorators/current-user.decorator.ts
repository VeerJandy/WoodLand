import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { UserForCreateToken } from '~/modules/token/interfaces'

export const CurrentUser = createParamDecorator(
  (
    key: keyof UserForCreateToken,
    ctx: ExecutionContext
  ): UserForCreateToken | Partial<UserForCreateToken> => {
    const request = ctx.switchToHttp().getRequest()
    return key ? request.user[key] : request.user
  }
)
