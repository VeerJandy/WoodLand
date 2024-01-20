import { memo } from 'react'

import Icon, { IconProps } from '~/ui/icons/Icon'

const IconLanguage = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1M9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1M9 17C10.6569 17 12 13.4183 12 9C12 4.58172 10.6569 1 9 1M9 17C7.34315 17 6 13.4183 6 9C6 4.58172 7.34315 1 9 1M1.5 9H16.5"
      stroke="currentColor"
      fill="transparent"
    />
  </Icon>
)

export default memo(IconLanguage)
