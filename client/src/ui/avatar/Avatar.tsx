import classNames from 'classnames'
import Image from 'next/image'
import { memo } from 'react'

import type { ClassName } from '~/models/GlobalModels'
import IconUser from '~/ui/icons/IconUser'

export interface AvatarProps {
  src?: string
  name?: string
  alt?: string
  bordered?: boolean
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  size?: 'sm'
  className?: ClassName
}

const Avatar = ({
  src,
  name,
  alt,
  bordered,
  color,
  size,
  className
}: AvatarProps) => (
  <div
    className={classNames(
      'relative flex items-center justify-center rounded-full bg-white dark:bg-gray-8',
      size === 'sm' && 'size-8',
      !size && 'size-10',
      bordered && 'ring-2 ring-offset-2 ring-offset-black',
      bordered && (!color || color === 'default') && 'ring-gray-4',
      bordered && color === 'primary' && 'ring-blue-4',
      bordered && color === 'secondary' && 'ring-purple-4',
      bordered && color === 'success' && 'ring-green-4',
      bordered && color === 'warning' && 'ring-orange-4',
      bordered && color === 'danger' && 'ring-red-4',
      className
    )}
  >
    {src && (
      <Image
        src={src}
        alt={alt ?? 'avatar'}
        fill
        sizes="(40px, 40px)"
        quality={100}
        className="z-one"
        priority
      />
    )}
    {name ? (
      <span className="small line-clamp-1 whitespace-nowrap text-center">
        {name.length <= 4 ? name : name.slice(0, 4)}
      </span>
    ) : (
      <IconUser />
    )}
  </div>
)

export default memo(Avatar)
