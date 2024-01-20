'use client'

import classNames from 'classnames'
import { type ComponentProps, Fragment, memo } from 'react'

import { useTranslation } from '~/i18n/i18n'
import type { ClassName } from '~/models/GlobalModels'

type Element = 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TextOwnProps<E extends Element = Element> {
  label: string
  as?: E
  className?: ClassName
}

export type TextProps<E extends Element> = TextOwnProps<E> &
  Omit<ComponentProps<E>, keyof TextOwnProps>

const defaultElement = 'p'

const Text = <E extends Element = typeof defaultElement>({
  label,
  as,
  className
}: TextProps<E>) => {
  const t = useTranslation()
  const TagName = as || Fragment

  return as ? (
    <TagName className={classNames(className)}>{t(label)}</TagName>
  ) : (
    <>{t(label)}</>
  )
}

export default memo(Text)
