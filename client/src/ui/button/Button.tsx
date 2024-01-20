import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { memo, type MouseEvent, type ReactNode } from 'react'

import { variants } from '~/consts/Animate'
import type { ClassName } from '~/models/GlobalModels'
import Loading from '~/ui/loading/Loading'
import Text from '~/ui/text/Text'

import styles from './Button.module.scss'

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  className?: ClassName
  background?: 'white' | 'transparent'
  size?: 'small' | 'circle' | 'empty'
  rounded?: boolean
  loading?: boolean
  disabled?: boolean
  label?: string
  icon?: ReactNode
  onClick?: (event: MouseEvent<HTMLButtonElement>) => unknown
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
  const buttonClassName = classNames(
    styles.button,
    background && styles[`button__${background}`],
    size && styles[`button__${size}`],
    rounded && styles.button__rounded,
    (loading || disabled) && styles.button__disabled,
    className
  )

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      event.preventDefault()
      return
    }

    if (onClick) onClick(event)
  }

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

export default memo(Button)
