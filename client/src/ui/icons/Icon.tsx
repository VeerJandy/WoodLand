import classNames from 'classnames'
import { memo, type ReactNode } from 'react'

import type { ClassName } from '~/models/GlobalModels'

export interface IconProps {
  size?: number | `${number}`
  className?: ClassName
  children?: ReactNode
}

const Icon = ({ children, size, className }: IconProps) => (
  <svg
    width={size ?? 18}
    height={size ?? 18}
    viewBox="0 0 18 18"
    style={{ display: 'block', minWidth: `${size ?? 18}px` }}
    className={classNames(className)}
  >
    {children}
  </svg>
)

export default memo(Icon)
