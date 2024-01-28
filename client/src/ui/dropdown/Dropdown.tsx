'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Children, memo } from 'react'

import { variants } from '~/consts/Animate'
import Portal from '~/ui/portal/Portal'

import styles from './Dropdown.module.scss'
import type { UseDropdownProps } from './hooks/useDropdown'
import useDropdown from './hooks/useDropdown'

interface DropdownProps extends UseDropdownProps {}

const Dropdown = ({ children, hover }: DropdownProps) => {
  const {
    functions: { triggerProps },
    state: { ref, menuTrigger, isOpen, wrapperStyle, menu }
  } = useDropdown({ children, hover })

  return (
    <div className="relative w-fit" {...triggerProps}>
      <div role="button" ref={ref}>
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
