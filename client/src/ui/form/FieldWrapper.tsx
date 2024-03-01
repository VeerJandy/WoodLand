'use client'

import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import type { ForwardedRef, ReactNode } from 'react'
import { forwardRef, memo } from 'react'
import type { FieldError } from 'react-hook-form'

import { variants } from '~/consts/Animate'
import useToggle from '~/hooks/useToggle'
import { ClassName } from '~/models/GlobalModels'
import Text from '~/ui/text/Text'

import styles from './Form.module.scss'

interface FieldWrapperProps {
  children: ReactNode
  error?: FieldError
  placeholder?: string
  isValue?: boolean
  transparent?: boolean
  disabled?: boolean
  className?: ClassName
  onClick?: () => void
}

const FieldWrapper = forwardRef(
  (
    {
      children,
      error,
      placeholder,
      isValue,
      transparent,
      disabled,
      className,
      onClick
    }: FieldWrapperProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [isFocus, toggle] = useToggle()

    return (
      <div
        ref={ref}
        className={classNames(
          'relative',
          styles.field,
          transparent && styles.field__transparent,
          error && !transparent && styles.field__error,
          disabled && styles.field__disabled,
          className
        )}
        onFocus={toggle}
        onBlur={toggle}
        onClick={onClick}
      >
        <label
          className={classNames(
            styles.field__placeholder,
            (isFocus || isValue) && styles.field__placeholder_active
          )}
        >
          <Text label={placeholder ?? ''} />
        </label>

        {children}

        <AnimatePresence mode="wait">
          {error && (
            <motion.span
              className="small absolute -bottom-5 left-2 line-clamp-1 text-red-4"
              {...variants.opacity}
            >
              <Text label={`errors.${error.message}`} />
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

export default memo(FieldWrapper)
