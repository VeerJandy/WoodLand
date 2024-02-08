import { UserRoleEnum } from '~/modules/user'

import useUser from '../hooks/useUser'

export const isUserSuperAdmin = () => {
  const { user } = useUser()
  if (!user) return false
  return user.role.includes(UserRoleEnum.SuperAdmin)
}
export const isUserModerator = (): boolean => {
  const { user } = useUser()
  if (!user) return false
  return user.role.includes(UserRoleEnum.Moderator)
}
