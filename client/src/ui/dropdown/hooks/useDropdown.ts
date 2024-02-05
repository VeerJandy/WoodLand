import type { ReactNode } from 'react'
import { Children, useEffect, useRef, useState } from 'react'

import useClickOutside from '~/hooks/useClickOutside'
import useToggle from '~/hooks/useToggle'

export interface UseDropdown {
  children: ReactNode
  hover?: boolean
}

const useDropdown = ({ children, hover }: UseDropdown) => {
  const ref = useRef<HTMLDivElement>(null)
  const [triggerProps, setTriggerProps] = useState({})
  const [menuTrigger, ...menu] = Children.toArray(children)
  const [isOpen, toggle, close, open] = useToggle()
  const [wrapperStyle, setWrapperStyle] = useState({
    top: '0',
    left: '0',
    width: 'fit-content'
  })
  useClickOutside(ref, close)

  useEffect(() => {
    if (hover) {
      setTriggerProps({ onMouseEnter: open, onMouseLeave: close })
    } else {
      setTriggerProps({ onClick: toggle })
    }
  }, [])

  useEffect(() => {
    if (ref.current) {
      const {
        width: parentWidth,
        top: parentTop,
        left: parentLeft,
        height: parentHeight
      } = ref.current.offsetParent!.getBoundingClientRect()

      setWrapperStyle(() => ({
        left: `${parentLeft}px`,
        top: `${parentTop + parentHeight + 4 + window.scrollY}px`,
        width: `${parentWidth}px`
      }))
    }
  }, [isOpen])

  return {
    functions: { triggerProps },
    state: {
      ref,
      isOpen,
      menuTrigger,
      wrapperStyle,
      menu
    }
  }
}

export default useDropdown
