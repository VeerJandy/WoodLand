import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

import ContentEnum from '../enums/ContentEnum'

interface HeaderStore {
  isOpen: boolean
  setIsOpen: () => void
  content: ContentEnum | null
  setContent: (content: ContentEnum | null) => void
}

const useHeaderStore = createWithEqualityFn<HeaderStore>(
  (set, get) => ({
    isOpen: false,
    setIsOpen: () => set({ isOpen: !get().isOpen }),
    content: null,
    setContent: content => set({ content })
  }),
  shallow
)

export default useHeaderStore
