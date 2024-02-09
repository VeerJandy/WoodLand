'use client'

import type { HTMLInputTypeAttribute, ReactNode } from 'react'
import { memo, useContext } from 'react'
import { useController } from 'react-hook-form'

import type { AutoCompleteModel } from '~/models/AutoCompleteModel'
import { ClassName } from '~/models/GlobalModels'
import { FormContext } from '~/ui/form/Form'
import IconArrowInCircle from '~/ui/icons/IconArrowInCircle'
import IconCheck from '~/ui/icons/IconCheck'
import IconWarning from '~/ui/icons/IconWarning'

import FieldWrapper from './FieldWrapper'
import styles from './Form.module.scss'

interface InputProps {
  name: string
  type?: HTMLInputTypeAttribute
  startContent?: ReactNode
  endContent?: ReactNode
  iconDependOnValue?: boolean
  placeholder?: string
  autoComplete?: AutoCompleteModel
  disabled?: boolean
  className?: ClassName
}

const Input = ({
  name,
  type,
  startContent,
  endContent,
  iconDependOnValue,
  placeholder,
  autoComplete,
  disabled,
  className
}: InputProps) => {
  const form = useContext(FormContext)!
  const { field, fieldState } = useController({ name, control: form.control })

  return (
    <FieldWrapper
      error={fieldState.error}
      isValue={Boolean(field.value)}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
    >
      {startContent}
      <input
        type={type ?? 'text'}
        className={styles.input}
        autoComplete={autoComplete}
        {...field}
      />
      {endContent}

      {iconDependOnValue && (
        <span className="flex w-6 items-center justify-center">
          {fieldState.invalid ? (
            <IconWarning size="16" className="text-red-4" />
          ) : fieldState.isDirty ? (
            <IconCheck size="16" />
          ) : (
            <IconArrowInCircle size="16" />
          )}
        </span>
      )}
    </FieldWrapper>
  )
}

export default memo(Input)
