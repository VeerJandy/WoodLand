'use client'

import { type ReactNode } from 'react'

import { useAdaptive } from '~/hooks/useAdaptive'
import { LangContext } from '~/i18n/i18n'
import { ConfettiProvider } from '~/modules/confetti'

interface ProvidersProps {
  children: ReactNode
  dictionary: string
}

const Providers = ({ children, dictionary }: ProvidersProps) => {
  useAdaptive()

  return (
    <LangContext.Provider value={dictionary}>
      <ConfettiProvider>{children}</ConfettiProvider>
    </LangContext.Provider>
  )
}

export default Providers
