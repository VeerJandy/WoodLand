import type { Locale } from '~/i18n/i18n'
import type { Options } from '~/models/GlobalModels'

const LanguageList: Options<Locale> = [
  {
    title: 'header.language_uk',
    value: 'uk'
  },
  {
    title: 'header.language_en',
    value: 'en'
  }
]

export default LanguageList
