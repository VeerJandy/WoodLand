import AppLink from '~/ui/app-link/AppLink'

import MenuList from '../../consts/MenuList'

const Menu = () => (
  <nav className="flex flex-1 items-center justify-center gap-4">
    {MenuList.map(menuItem => (
      <AppLink
        href={menuItem.link}
        key={menuItem.link}
        label={menuItem.title}
        className="flex h-full items-center text-black-opacity transition-colors hover:text-black dark:text-white-opacity dark:hover:text-white"
      />
    ))}
  </nav>
)

export default Menu
