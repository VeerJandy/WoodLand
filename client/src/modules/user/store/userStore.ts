import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

import type UserModel from '../models/UserModel'

interface UserStore {
  user: UserModel | null
  signIn: (user: UserModel) => void
  signOut: () => void
}

const useUserStore = createWithEqualityFn<UserStore>(
  set => ({
    user: null,

    signIn: user => set({ user }),
    signOut: () => set({ user: null })
  }),
  shallow
)

export default useUserStore
