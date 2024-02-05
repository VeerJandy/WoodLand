import classNames from 'classnames'
import { memo, ReactNode } from 'react'

import Avatar, { AvatarProps } from '~/ui/avatar/Avatar'

interface UserProps {
  avatarProps?: AvatarProps
  name?: string
  nameSize?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'small'
  description?: string | ReactNode
}

const User = ({ avatarProps, name, nameSize, description }: UserProps) => (
  <div className="inline-flex items-center gap-2">
    <Avatar {...avatarProps} />
    <div className="flex flex-col">
      {name && <span className={classNames(nameSize ?? 'span')}>{name}</span>}
      {description && <span className="small text-gray-3">{description}</span>}
    </div>
  </div>
)

export default memo(User)
