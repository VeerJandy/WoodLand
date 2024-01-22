'use client'

import useUserStore from '../store/userStore'

const useUser = () => {
  const { user, signIn, signOut } = useUserStore(state => state)

  return { user, signIn, signOut }
}

export default useUser
