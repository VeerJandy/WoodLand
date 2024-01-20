'use client'

import { memo, type ReactNode, useEffect, useState } from 'react'
import ReactDom from 'react-dom'

interface PortalProps {
  children: ReactNode
}

const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted
    ? ReactDom.createPortal(
        children,
        document.querySelector('body') as HTMLBodyElement
      )
    : null
}

export default memo(Portal)
