'use client'

import classNames from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  type ForwardedRef,
  forwardRef,
  memo,
  type ReactNode,
  useMemo
} from 'react'
import { UrlObject } from 'url'

import RouterEnum from '~/enums/RouterEnum'
import type { ClassName } from '~/models/GlobalModels'
import Button, { ButtonProps } from '~/ui/button/Button'
import Text from '~/ui/text/Text'

interface AppLinkProps {
  href: RouterEnum | UrlObject | string
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
    const pathname = usePathname()

    const newHref = useMemo(() => {
      const locale = pathname.slice(0, 3)

      if (typeof href === 'string')
        return href[0] === '/' ? `${locale}${href}` : `${locale}/${href}`

      return {
        ...href,
        pathname:
          href.pathname && href.pathname[0] === '/'
            ? `${locale}${href.pathname}`
            : `${locale}/${href.pathname}`
      }
    }, [href])

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
