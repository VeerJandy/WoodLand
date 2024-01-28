import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

import useLocalStorage from '~/hooks/useLocalStorage'
import { Locale } from '~/i18n/i18n'

const useLanguage = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [lang, setLang] = useLocalStorage<Locale>('lang')

  const setLanguage = (lang: Locale) => {
    router.push(`/${lang}${pathname.slice(3)}`)
    setLang(lang)
  }

  useEffect(() => {
    if (lang && pathname.slice(1, 3) !== lang) setLanguage(lang as Locale)
  }, [])

  return { functions: { setLanguage } }
}

export default useLanguage
