import { memo } from 'react'

import Icon, { IconProps } from '~/ui/icons/Icon'

const IconArrowDown = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M9.00001 13C8.7696 13 8.55761 12.9264 8.39171 12.771L1.23964 6.2843C1.08294 6.1452 1 5.9652 1 5.7526C1 5.3272 1.35944 5 1.83871 5C2.06913 5 2.28111 5.09 2.43779 5.2209L9.00001 11.1759L15.5622 5.2209C15.7189 5.09 15.9216 5 16.1613 5C16.6405 5 17 5.3272 17 5.7526C17 5.9652 16.917 6.1452 16.7511 6.2843L9.60832 12.771C9.43318 12.9264 9.23043 13 9.00001 13Z"
      fill="currentColor"
    />
  </Icon>
)

export default memo(IconArrowDown)
