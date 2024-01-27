import { memo, ReactNode } from 'react'

import Avatar, { AvatarProps } from '~/ui/avatar/Avatar'

interface UserProps {
  avatarProps?: AvatarProps
  name?: string
  description?: string | ReactNode
}

const User = ({ avatarProps, name, description }: UserProps) => (
  <div className="inline-flex items-center gap-2">
    <Avatar {...avatarProps} />
    <div className="flex flex-col">
      {name && <span className="span">{name}</span>}
      {description && <span className="small text-gray-3">{description}</span>}
    </div>
  </div>
)

export default memo(User)
