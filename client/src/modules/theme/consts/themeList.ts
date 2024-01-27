import type { Options } from '~/models/GlobalModel'

import type ThemeModel from '../models/ThemeModel'

const themeList: Options<ThemeModel> = [
  {
    value: 'dark',
    title: 'header.theme_dark'
  },
  {
    value: 'light',
    title: 'header.theme_light'
  },
  {
    value: null,
    title: 'header.theme_system'
  }
]

export default themeList
