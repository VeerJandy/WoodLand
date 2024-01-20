import classNames from 'classnames'
import { memo } from 'react'

import type { ClassName } from '~/models/GlobalModels'

interface LoadingProps {
  size?: number | string
  className?: ClassName
}

const Loading = ({ size, className }: LoadingProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={`${size ?? 18}px`}
    height={`${size ?? 18}px`}
    viewBox="0 0 100 100"
    className={classNames(className)}
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      r="36"
      strokeDasharray="169.64600329384882 58.548667764616276"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1.25s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
)

export default memo(Loading)
