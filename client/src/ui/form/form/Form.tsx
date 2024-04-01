'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames'
import type { ForwardedRef, ReactNode } from 'react'
import { createContext, forwardRef, memo } from 'react'
import type { DefaultValues, UseFormReturn } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import type { ZodType } from 'zod'

import type { ClassName } from '~/models/GlobalModels'

export const FormContext = createContext<UseFormReturn<any> | null>(null)

interface FormProps {
  children?: ReactNode
  render?: (form: UseFormReturn) => ReactNode
  onSubmit: (form: any, formContext: UseFormReturn) => unknown
  defaultValues: Required<DefaultValues<any>>
  rules: ZodType
  loading?: boolean
  className?: ClassName
}

const Form = forwardRef(
  (
    {
      onSubmit,
      defaultValues,
      loading,
      rules,
      children,
      className,
      render
    }: FormProps,
    ref: ForwardedRef<HTMLFormElement>
  ) => {
    const form = useForm({
      mode: 'onBlur',
      defaultValues,
      resolver: zodResolver(rules)
    })

    return (
      <FormContext.Provider value={form}>
        <form
          ref={ref}
          className={classNames(loading && 'pointer-events-none', className)}
          onSubmit={form.handleSubmit(data => onSubmit(data, form))}
        >
          {children && children}
          {render && render(form)}
        </form>
      </FormContext.Provider>
    )
  }
)

export default memo(Form)
