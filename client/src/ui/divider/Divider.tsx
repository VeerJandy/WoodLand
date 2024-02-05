import classNames from 'classnames'
import { memo } from 'react'

import { ClassName } from '~/models/GlobalModels'

interface DividerProps {
  className?: ClassName
}

const Divider = ({ className }: DividerProps) => (
  <hr className={classNames('my-4 h-[1px] border-none bg-gray-4', className)} />
)

export default memo(Divider)
