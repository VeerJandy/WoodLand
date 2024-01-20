import { memo } from 'react'

import Icon, { IconProps } from '~/ui/icons/Icon'

const IconTelegram = (props: IconProps) => (
  <Icon {...props}>
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1347 1.11183C17.1089 0.685033 18.1533 1.54216 17.9813 2.62734L15.9495 15.4449C15.7535 16.6808 14.449 17.3899 13.3592 16.7741C12.4474 16.2587 11.0944 15.4655 9.87513 14.6366C9.26628 14.2226 7.40195 12.8952 7.6311 11.9504C7.82704 11.1425 10.9612 8.10697 12.7522 6.30174C13.4557 5.59262 13.1353 5.18297 12.3044 5.83587C10.2434 7.4555 6.93433 9.91798 5.84007 10.611C4.87461 11.2224 4.37052 11.3268 3.76923 11.2224C2.67124 11.0321 1.65326 10.7373 0.822166 10.3788C-0.30112 9.89432 -0.246405 8.2882 0.821405 7.82047L16.1347 1.11183Z"
        fill="url(#paint0_linear_29_154)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_29_154"
          x1="18"
          y1="0.999999"
          x2="-0.789249"
          y2="15.8336"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#64BDF8" />
          <stop offset="1" stopColor="#4AA1EE" />
        </linearGradient>
      </defs>
    </>
  </Icon>
)

export default memo(IconTelegram)
