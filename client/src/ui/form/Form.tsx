'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import type { ForwardedRef, ReactNode } from 'react'
import { createContext, forwardRef, memo } from 'react'
import type { DefaultValues, UseFormReturn } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import type { ZodType } from 'zod'

import type { ClassName } from '~/models/GlobalModels'

interface FormProps {
  children: ReactNode
  onSubmit: (form: any, formContext: UseFormReturn) => unknown
  defaultValues: DefaultValues<any>
  rules: ZodType
  className?: ClassName
  loading?: boolean
}

export const FormContext = createContext<UseFormReturn<any> | null>(null)

const Form = forwardRef(
  (
    { children, onSubmit, className, rules, defaultValues, loading }: FormProps,
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
          {children}
        </form>
      </FormContext.Provider>
    )
  }
)

export const MotionForm = motion(memo(Form))

export default memo(Form)
