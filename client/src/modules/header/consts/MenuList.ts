import RouterEnum from '~/enums/RouterEnum'

import { MenuModel } from '../models/MenuModel'

const MenuList: MenuModel[] = [
  {
    title: 'header.home',
    link: RouterEnum.Home
  },
  {
    title: 'header.catalog',
    link: RouterEnum.Catalog
  }
]

export default MenuList
