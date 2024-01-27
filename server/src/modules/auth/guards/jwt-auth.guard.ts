import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { AuthGuard } from '@nestjs/passport'
import { Observable } from 'rxjs'
import { isPublic } from '~/common/decorators'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  constructor(private readonly reflector: Reflector) {
    super()
  }

  canActivate(
    ctx: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    if (isPublic(ctx, this.reflector)) return true

    return super.canActivate(ctx)
  }
}
