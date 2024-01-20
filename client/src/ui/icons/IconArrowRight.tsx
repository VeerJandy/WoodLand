import { memo } from 'react'

import Icon, { IconProps } from '~/ui/icons/Icon'

const IconArrowRight = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M13 9.00001C13 9.23043 12.9182 9.43318 12.7628 9.60832L6.28425 16.7511C6.13702 16.917 5.95706 17 5.74438 17C5.3272 17 5 16.6405 5 16.1613C5 15.9216 5.0818 15.7189 5.21268 15.5622L11.1677 9.00001L5.21268 2.43779C5.0818 2.28111 5 2.06913 5 1.83871C5 1.35945 5.3272 1 5.74438 1C5.95706 1 6.13702 1.08294 6.28425 1.23964L12.7628 8.39171C12.9182 8.55761 13 8.7696 13 9.00001Z"
      fill="currentColor"
    />
  </Icon>
)

export default memo(IconArrowRight)
