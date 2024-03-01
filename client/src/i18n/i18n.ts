import { createContext, useContext } from 'react'

export type Locale = 'uk' | 'en'

const locales: Locale[] = ['uk', 'en']
export const defaultLocale = 'uk'

export const LangContext = createContext<string>('')

export const checkIsPathnameHasLocale = (pathname: string) =>
  locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

type Dictionary = string | { [key: string]: Dictionary }

export const useTranslation = () => {
  const dictionaryString = useContext(LangContext)
  const dictionary: Dictionary = JSON.parse(dictionaryString)

  return (key: string, values?: Record<string, string>) => {
    try {
      const keys: string[] = key.split('.')
      let words: string | Dictionary = dictionary
      let result: string | Dictionary = key

      keys.map(key => {
        if (typeof words !== 'string') {
          words = words[key]
          result = words ? (words as string) : key
        }
      })

      if (typeof result === 'string') {
        if (!values) return result

        Object.entries(values).map(([key, value]) => {
          result = (result as string).replace(`{${key}}`, value)
        })
        return result
      }

      // eslint-disable-next-line no-console
      console.error(`Translation key "${key}" not found`)
      return key
    } catch (e) {
      return key
    }
  }
}
