import classNames from 'classnames'
import type { MouseEvent, ReactNode } from 'react'
import { memo } from 'react'

import RouterEnum from '~/enums/RouterEnum'
import AppLink from '~/ui/app-link/AppLink'
import Text from '~/ui/text/Text'

import styles from './Dropdown.module.scss'

interface DropdownItemProps {
  label: string
  background?: 'red'
  iconStart?: ReactNode
  iconEnd?: ReactNode
  href?: RouterEnum | string
  onClick?: (event: MouseEvent<HTMLDivElement>) => unknown
}

const DropdownItem = ({
  label,
  background,
  iconStart,
  iconEnd,
  href,
  onClick
}: DropdownItemProps) => (
  <div
    className={classNames(
      styles.dropdown__item,
      styles[`dropdown__item_${background}`]
    )}
    onClick={onClick}
  >
    {href ? (
      <AppLink
        label={label}
        href={href}
        button
        buttonProps={{
          background: 'transparent',
          size: 'empty',
          icon: iconStart
        }}
      />
    ) : (
      <>
        {iconStart}
        <Text label={label} as="span" className="flex-1" />
        {iconEnd}
      </>
    )}
  </div>
)

export default memo(DropdownItem)
