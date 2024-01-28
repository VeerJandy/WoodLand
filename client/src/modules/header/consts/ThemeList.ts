import type { Options } from '~/models/GlobalModels'
import type { ThemeModel } from '~/modules/theme'

const ThemeList: Options<ThemeModel> = [
  {
    title: 'header.light_theme',
    value: 'light'
  },
  {
    title: 'header.dark_theme',
    value: 'dark'
  },
  {
    title: 'header.system_theme',
    value: null
  }
]

export default ThemeList
