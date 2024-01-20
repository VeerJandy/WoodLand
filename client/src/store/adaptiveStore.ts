import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

interface AdaptiveStore {
  isMobile: null | boolean
  setIsMobile: (isMobile: boolean) => void
}

const useAdaptiveStore = createWithEqualityFn<AdaptiveStore>(
  set => ({
    isMobile: null,

    setIsMobile: isMobile => set({ isMobile })
  }),
  shallow
)

export default useAdaptiveStore
