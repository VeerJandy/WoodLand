import RouterEnum from '~/enums/RouterEnum'
import { UserRoleEnum } from '~/modules/user'

interface ProtectedRoute {
  route: RouterEnum
  role: UserRoleEnum
}

export const protectedRoutes: ProtectedRoute[] = [
  {
    route: RouterEnum.Admin,
    role: UserRoleEnum.Moderator
  },
  {
    route: RouterEnum.SuperAdmin,
    role: UserRoleEnum.SuperAdmin
  }
]
