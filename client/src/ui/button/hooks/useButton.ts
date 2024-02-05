import classNames from 'classnames'
import type { MouseEvent } from 'react'

import type { ClassName } from '~/models/GlobalModels'

import styles from '../Button.module.scss'

export interface UseButton {
  background?: 'white' | 'blur' | 'transparent'
  className?: ClassName
  size?: 'big' | 'small' | 'circle' | 'empty'
  rounded?: boolean
  loading?: boolean
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => unknown
}

const useButton = ({
  background,
  className,
  disabled,
  size,
  rounded,
  loading,
  onClick
}: UseButton) => {
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

  return {
    state: { buttonClassName },
    functions: { handleClick }
  }
}

export default useButton
