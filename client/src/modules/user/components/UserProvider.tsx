import type { ReactNode } from 'react'
import { memo, useEffect } from 'react'

import type { UserModel } from '~/modules/user'
import { useUser } from '~/modules/user'

interface UserProviderProps {
  children: ReactNode
  user: UserModel | null
}

const UserProvider = ({ children, user }: UserProviderProps) => {
  const { signIn } = useUser()

  useEffect(() => {
    user && signIn(user)
  }, [])

  return <>{children}</>
}

export default memo(UserProvider)
