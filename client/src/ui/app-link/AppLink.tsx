'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'
import type { ForwardedRef, ReactNode } from 'react'
import { forwardRef, memo } from 'react'

import type { ClassName } from '~/models/GlobalModels'
import type { ButtonProps } from '~/ui/button/Button'
import Button from '~/ui/button/Button'
import Text from '~/ui/text/Text'

import type { UseAppList } from './hooks/useAppList'
import useAppList from './hooks/useAppList'

interface AppLinkProps extends UseAppList {
  children?: ReactNode
  className?: ClassName
  button?: boolean
  label?: string
  onClick?: () => unknown
  buttonProps?: ButtonProps
}

const AppLink = forwardRef(
  (
    {
      children,
      href,
      className,
      button,
      label,
      onClick,
      buttonProps
    }: AppLinkProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    const {
      state: { newHref }
    } = useAppList({ href })

    return (
      <Link
        ref={ref}
        href={newHref}
        className={classNames(className)}
        onClick={onClick}
      >
        {button ? (
          <Button type="button" label={label} {...buttonProps} />
        ) : (
          <>{label ? <Text label={label} /> : children}</>
        )}
      </Link>
    )
  }
)

export const MotionAppLink = motion(memo(AppLink))
export default memo(AppLink)
