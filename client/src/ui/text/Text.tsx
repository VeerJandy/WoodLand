'use client'

import classNames from 'classnames'
import type { ComponentProps, ForwardedRef } from 'react'
import { forwardRef, memo } from 'react'

import { useTranslation } from '~/i18n/i18n'
import type { ClassName } from '~/models/GlobalModels'

type Element =
  | 'span'
  | 'div'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'li'

interface TextOwnProps<E extends Element = Element> {
  label: string
  as?: E
  className?: ClassName
  onClick?: () => unknown
}

export type TextProps<E extends Element> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps>

const defaultElement = 'p'

const Text = forwardRef(
  <E extends Element = typeof defaultElement>(
    { label, as, className, onClick }: TextProps<E>,
    ref: ForwardedRef<any>
  ) => {
    const t = useTranslation()
    const TagName = as || defaultElement

    return as ? (
      <TagName ref={ref} className={classNames(className)} onClick={onClick}>
        {t(label)}
      </TagName>
    ) : (
      <>{t(label)}</>
    )
  }
)

export default memo(Text)
