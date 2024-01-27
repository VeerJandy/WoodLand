import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

import ThemeModel from '../models/ThemeModel'

interface ThemeStore {
  theme: ThemeModel
  setTheme: (theme: ThemeModel) => void
}

const useThemeStore = createWithEqualityFn<ThemeStore>(
  set => ({
    theme: null,

    setTheme: theme => set({ theme })
  }),
  shallow
)

export default useThemeStore
