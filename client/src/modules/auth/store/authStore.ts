import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

interface AuthStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const useAuthStore = createWithEqualityFn<AuthStore>(
  set => ({
    isOpen: false,

    setIsOpen: isOpen => set({ isOpen })
  }),
  shallow
)

export default useAuthStore
