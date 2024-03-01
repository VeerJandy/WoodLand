import RouterEnum from '~/enums/RouterEnum'
import { isUserModerator, isUserSuperAdmin } from '~/modules/user'
import AppLink from '~/ui/app-link/AppLink'

import MenuList from '../../consts/MenuList'

const Menu = () => {
  const isModerator = isUserModerator()
  const isSuperAdmin = isUserSuperAdmin()

  return (
    <nav className="flex flex-1 items-center justify-center gap-4">
      {isModerator && (
        <AppLink
          href={RouterEnum.Admin}
          label="Admin"
          className="flex h-full items-center text-white-opacity transition-colors hover:text-white"
        />
      )}
      {isSuperAdmin && (
        <AppLink
          href={RouterEnum.SuperAdmin}
          label="Super Admin"
          className="flex h-full items-center text-white-opacity transition-colors hover:text-white"
        />
      )}
      {MenuList.map(menuItem => (
        <AppLink
          href={menuItem.link}
          key={menuItem.link}
          label={menuItem.title}
          className="flex h-full items-center text-white-opacity transition-colors hover:text-white"
        />
      ))}
    </nav>
  )
}

export default Menu
