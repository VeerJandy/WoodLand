'use client'

import classNames from 'classnames'
import { memo, useContext } from 'react'
import { useController } from 'react-hook-form'

import { ClassName } from '~/models/GlobalModels'
import { FormContext } from '~/ui/form/Form'

import FieldWrapper from './FieldWrapper'
import styles from './Form.module.scss'

interface TextareaProps {
  name: string
  placeholder?: string
  disabled?: boolean
  className?: ClassName
}

const Textarea = ({
  name,
  placeholder,
  disabled,
  className
}: TextareaProps) => {
  const form = useContext(FormContext)!
  const { field, fieldState } = useController({ name, control: form.control })

  return (
    <FieldWrapper
      error={fieldState.error}
      isValue={Boolean(field.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={classNames(className, '!h-40')}
    >
      <textarea
        className={classNames(styles.input, 'resize-none')}
        {...field}
      />
    </FieldWrapper>
  )
}

export default memo(Textarea)
