'use client'

import type { ReactNode } from 'react'
import { memo, useEffect } from 'react'

import { getStorageItem } from '~/helpers/storage'
import useHtmlAttribute from '~/hooks/useHtmlAttribute'
import useLocalStorage from '~/hooks/useLocalStorage'
import { useTheme } from '~/modules/theme'

import type ThemeModel from '../models/ThemeModel'

interface ThemeProviderProps {
  children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const {
    functions: { setTheme }
  } = useTheme()
  const [themeInStorage] = useLocalStorage<ThemeModel>('theme', null)
  const setAttribute = useHtmlAttribute('html')

  useEffect(() => {
    if (themeInStorage) {
      setAttribute('data-theme', themeInStorage)
      setTheme(themeInStorage)
    } else {
      const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
      const newTheme: ThemeModel = matchMedia.matches ? 'dark' : 'light'

      setAttribute('data-theme', newTheme)
      setTheme(newTheme)
    }
  }, [])

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
    matchMedia.addEventListener('change', () => {
      const themeInStorage = getStorageItem('theme')
      if (themeInStorage) return

      const newTheme: ThemeModel = matchMedia.matches ? 'dark' : 'light'
      setAttribute('data-theme', newTheme)
    })
  }, [])

  return <>{children}</>
}

export default memo(ThemeProvider)
