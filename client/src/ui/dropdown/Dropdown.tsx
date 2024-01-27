'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Children, memo, useEffect, useRef, useState } from 'react'

import { variants } from '~/consts/Animate'
import useClickOutside from '~/hooks/useClickOutside'
import useToggle from '~/hooks/useToggle'
import Portal from '~/ui/portal/Portal'

import styles from './Dropdown.module.scss'

interface DropdownProps {
  children: ReactNode
}

const Dropdown = ({ children }: DropdownProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [menuTrigger, ...menu] = Children.toArray(children)
  const [isOpen, toggle, close] = useToggle()
  const [wrapperStyle, setWrapperStyle] = useState({
    top: '0',
    left: '0',
    width: 'fit-content'
  })

  useClickOutside(ref, close)

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

  return (
    <div className="relative w-fit">
      <div role="button" onClick={toggle} ref={ref}>
        {menuTrigger}
      </div>

      <Portal>
        <AnimatePresence mode="popLayout">
          {isOpen && (
            <motion.div
              className={styles.dropdown__wrapper}
              style={wrapperStyle}
              {...variants.opacity}
            >
              {Children.map(menu, (child, index) => (
                <motion.div {...variants.opacity} custom={index}>
                  {child}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </div>
  )
}

export default memo(Dropdown)
