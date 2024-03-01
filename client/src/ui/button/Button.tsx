'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { memo, type ReactNode } from 'react'

import { variants } from '~/consts/Animate'
import Loading from '~/ui/loading/Loading'
import Text from '~/ui/text/Text'

import type { UseButton } from './hooks/useButton'
import useButton from './hooks/useButton'

export interface ButtonProps extends UseButton {
  type?: 'button' | 'submit' | 'reset'
  label?: string
  icon?: ReactNode
}

const Button = ({
  type,
  className,
  background,
  size,
  rounded,
  loading,
  disabled,
  label,
  icon,
  onClick
}: ButtonProps) => {
  const {
    state: { buttonClassName },
    functions: { handleClick }
  } = useButton({
    className,
    background,
    size,
    rounded,
    onClick
  })

  return (
    <button
      type={type ?? 'button'}
      className={buttonClassName}
      disabled={disabled}
      onClick={handleClick}
    >
      <motion.span
        animate={{ opacity: loading ? 0 : 1 }}
        className="flex h-full items-center gap-2 whitespace-nowrap"
      >
        {icon}
        {label && <Text label={label} />}
      </motion.span>

      <AnimatePresence mode="wait">
        {loading && (
          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            {...variants.opacity}
          >
            <Loading />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

export const MotionButton = motion(memo(Button))

export default memo(Button)
