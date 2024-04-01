'use client'

import { type ReactNode } from 'react'

import { useAdaptive } from '~/hooks/useAdaptive'
import { LangContext } from '~/i18n/i18n'

interface ProvidersProps {
  children: ReactNode
  dictionary: string
}

const Providers = ({ children, dictionary }: ProvidersProps) => {
  useAdaptive()

  return (
    <LangContext.Provider value={dictionary}>{children}</LangContext.Provider>
  )
}

export default Providers
