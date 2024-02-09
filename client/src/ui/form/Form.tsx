'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import type { ForwardedRef, ReactElement, ReactNode } from 'react'
import { createContext, forwardRef, memo } from 'react'
import type { DefaultValues, FieldValues, UseFormReturn } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import type { ZodType } from 'zod'

import type { ClassName } from '~/models/GlobalModels'

interface FormProps<T extends FieldValues> {
  children?: ReactNode
  render?: (form: UseFormReturn<T>) => ReactNode
  onSubmit: (form: any, formContext: UseFormReturn<T>) => unknown
  defaultValues: Required<DefaultValues<T>>
  rules: ZodType<T>
  loading?: boolean
  className?: ClassName
}

export const FormContext = createContext<UseFormReturn<any> | null>(null)

type ReturnFormComponentType = <T extends FieldValues>(
  props: FormProps<T> & { ref?: ForwardedRef<HTMLFormElement> }
) => ReactElement

const Form = forwardRef(function <T extends FieldValues>(
  {
    onSubmit,
    defaultValues,
    loading,
    rules,
    children,
    className,
    render
  }: FormProps<T>,
  ref: ForwardedRef<HTMLFormElement>
) {
  const form = useForm<T>({
    mode: 'onBlur',
    defaultValues: defaultValues as DefaultValues<T>,
    resolver: zodResolver(rules)
  })

  return (
    <FormContext.Provider value={form}>
      <form
        ref={ref}
        className={classNames(loading && 'pointer-events-none', className)}
        onSubmit={form.handleSubmit(data => onSubmit(data, form))}
      >
        {children}
        {render && render(form)}
      </form>
    </FormContext.Provider>
  )
}) as ReturnFormComponentType

export const MotionForm = motion(memo(Form))

export default memo(Form) as ReturnFormComponentType
