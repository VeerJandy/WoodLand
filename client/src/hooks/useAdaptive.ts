'use client'

import { useEffect } from 'react'

import useAdaptiveStore from '~/store/adaptiveStore'

export const useAdaptive = () => {
  const setIsMobile = useAdaptiveStore(state => state.setIsMobile)

  useEffect(() => {
    const match = matchMedia('(max-width: 768px)')
    match.addEventListener('change', event => {
      setIsMobile(event.matches)
    })
    setIsMobile(match.matches)
  }, [setIsMobile])
}

export const useIsMobile = () => {
  return useAdaptiveStore(state => state.isMobile)
}
