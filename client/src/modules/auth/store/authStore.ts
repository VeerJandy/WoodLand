import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

interface AuthStore {
  isShowAuthModal: boolean
  setIsShowAuthModal: (isShowAuthModal: boolean) => void
}

const useAuthStore = createWithEqualityFn<AuthStore>(
  set => ({
    isShowAuthModal: false,

    setIsShowAuthModal: isShowAuthModal => set({ isShowAuthModal })
  }),
  shallow
)

export default useAuthStore
