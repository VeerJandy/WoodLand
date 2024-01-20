import { memo } from 'react'

import Icon, { IconProps } from '~/ui/icons/Icon'

const IconHeartFill = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M0 6.2636C0 9.97602 3.23564 13.6275 8.34741 16.7647C8.53775 16.878 8.80965 17 8.99999 17C9.19032 17 9.46222 16.878 9.66162 16.7647C14.7643 13.6275 18 9.97602 18 6.2636C18 3.17865 15.7976 1 12.861 1C11.1843 1 9.82476 1.76688 8.99999 2.94336C8.19334 1.7756 6.8157 1 5.13897 1C2.20241 1 0 3.17865 0 6.2636Z"
      fill="currentColor"
    />
  </Icon>
)

export default memo(IconHeartFill)
