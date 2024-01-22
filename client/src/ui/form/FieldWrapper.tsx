'use client'

import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { memo } from 'react'
import type { FieldError } from 'react-hook-form'

import { variants } from '~/consts/Animate'
import useToggle from '~/hooks/useToggle'
import Text from '~/ui/text/Text'

import styles from './Form.module.scss'

interface FieldWrapperProps {
  children: ReactNode
  error?: FieldError
  placeholder?: string
  isValue?: boolean
  isTransparent?: boolean
  disabled?: boolean
}

const FieldWrapper = ({
  children,
  error,
  placeholder,
  isValue,
  isTransparent,
  disabled
}: FieldWrapperProps) => {
  const [isFocus, toggle] = useToggle()

  return (
    <div
      className={classNames(
        'relative',
        styles.field,
        isTransparent && styles.field__transparent,
        error && !isTransparent && styles.field__error,
        disabled && styles.field__disabled
      )}
      onFocus={toggle}
      onBlur={toggle}
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

export default memo(FieldWrapper)
