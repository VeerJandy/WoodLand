'use client'

import { type ReactNode } from 'react'

import { useAdaptive } from '~/hooks/useAdaptive'
import { LangContext } from '~/i18n/i18n'
import { ConfettiProvider } from '~/modules/confetti'
import { UserModel, UserProvider } from '~/modules/user'

interface ProvidersProps {
  children: ReactNode
  dictionary: string
  user: UserModel | null
}

const Providers = ({ children, dictionary, user }: ProvidersProps) => {
  useAdaptive()

  return (
    <LangContext.Provider value={dictionary}>
      <ConfettiProvider>
        <UserProvider user={user}>{children}</UserProvider>
      </ConfettiProvider>
    </LangContext.Provider>
  )
}

export default Providers
