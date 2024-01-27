import useHtmlAttribute from '~/hooks/useHtmlAttribute'
import useLocalStorage from '~/hooks/useLocalStorage'

import type ThemeModel from '../models/ThemeModel'
import useThemeStore from '../store/themeStore'

const useTheme = () => {
  const [, setThemeInStorage] = useLocalStorage<ThemeModel>('theme')
  const setAttribute = useHtmlAttribute('html')

  const { theme, setTheme } = useThemeStore(state => ({
    theme: state.theme,
    setTheme: state.setTheme
  }))

  const onSetTheme = (theme: ThemeModel) => {
    setThemeInStorage(theme)

    if (theme) {
      setTheme(theme)
      setAttribute('data-theme', theme)
    } else {
      const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
      const newTheme: ThemeModel = matchMedia.matches ? 'dark' : 'light'
      setTheme(newTheme)
      setAttribute('data-theme', newTheme)
    }
  }

  return {
    state: { theme },
    functions: {
      onSetTheme
    }
  }
}

export default useTheme
