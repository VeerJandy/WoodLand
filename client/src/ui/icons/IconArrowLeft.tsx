import { memo } from 'react'

import Icon, { IconProps } from '~/ui/icons/Icon'

const IconArrowLeft = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M5 9.00001C5 8.7696 5.07362 8.55761 5.22904 8.39171L11.7157 1.23964C11.8548 1.08294 12.0348 1 12.2474 1C12.6728 1 13 1.35945 13 1.83871C13 2.06913 12.91 2.28111 12.7791 2.43779L6.82413 9.00001L12.7791 15.5622C12.91 15.7189 13 15.9216 13 16.1613C13 16.6405 12.6728 17 12.2474 17C12.0348 17 11.8548 16.917 11.7157 16.7511L5.22904 9.60832C5.07362 9.43318 5 9.23043 5 9.00001Z"
      fill="currentColor"
    />
  </Icon>
)

export default memo(IconArrowLeft)
