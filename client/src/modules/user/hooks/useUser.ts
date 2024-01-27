'use client'

import { request } from '~/helpers/request'

import useUserStore from '../store/userStore'

const useUser = () => {
  const { user, signIn, signOut } = useUserStore(state => state)

  const onSignOut = async () => {
    const { result } = await request('/auth/sign-out')
    result && signOut()
  }

  return { user, signIn, signOut: onSignOut }
}

export default useUser
