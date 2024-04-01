import type { RouterType } from '~/consts/Router'
import Router from '~/consts/Router'
import { UserRoleEnum } from '~/modules/user'

interface ProtectedRoute {
  route: RouterType
  role: UserRoleEnum
}

export const protectedRoutes: ProtectedRoute[] = [
  {
    route: Router.Admin,
    role: UserRoleEnum.Moderator
  },
  {
    route: Router.SuperAdmin,
    role: UserRoleEnum.SuperAdmin
  },
  {
    route: Router.Profile,
    role: UserRoleEnum.User
  }
]
