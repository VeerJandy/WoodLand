import { memo } from 'react'

import Icon, { IconProps } from '~/ui/icons/Icon'

const IconTheme = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M9 18C13.9225 18 18 13.9313 18 9.00001C18 4.07745 13.9225 7.62939e-06 9 7.62939e-06C4.06873 7.62939e-06 0 4.07745 0 9.00001C0 13.9313 4.07744 18 9 18ZM9 16.2314V1.77735C12.9991 1.77735 16.2226 4.99226 16.2313 9.00001C16.2313 13.0078 13.0078 16.2314 9 16.2314Z"
      fill="currentColor"
    />
  </Icon>
)

export default memo(IconTheme)
