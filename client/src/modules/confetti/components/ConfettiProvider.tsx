'use client'

import type { ReactNode } from 'react'
import { createContext, memo, useState } from 'react'
import Realistic from 'react-canvas-confetti/dist/presets/realistic'
import { TConductorInstance } from 'react-canvas-confetti/src/types'

import Portal from '~/ui/portal/Portal'

import type { ConfettiContextModel } from '../models/ConfettiModel'

export const ConfettiContext = createContext<ConfettiContextModel | null>(null)

interface ConfettiProviderProps {
  children: ReactNode
}

const ConfettiProvider = ({ children }: ConfettiProviderProps) => {
  const [conductor, setConductor] = useState<TConductorInstance>()
  const runOnceConfetti = () => conductor?.shoot()

  const init = ({ conductor }: { conductor: TConductorInstance }) =>
    setConductor(() => conductor)

  return (
    <ConfettiContext.Provider value={{ runOnceConfetti }}>
      {children}

      <Portal>
        <Realistic
          onInit={init}
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            inset: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </Portal>
    </ConfettiContext.Provider>
  )
}

export default memo(ConfettiProvider)
