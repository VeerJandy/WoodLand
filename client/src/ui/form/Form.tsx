'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames'
import { createContext, memo, type ReactNode } from 'react'
import {
  type DefaultValues,
  useForm,
  type UseFormReturn
} from 'react-hook-form'
import { type ZodObject, type ZodRawShape } from 'zod'

import type { ClassName } from '~/models/GlobalModels'

interface FormProps {
  children: ReactNode
  onSubmit: (form: any) => unknown
  defaultValues: DefaultValues<any>
  rules: ZodObject<ZodRawShape>
  className?: ClassName
}

export const FormContext = createContext<UseFormReturn<any> | null>(null)

const Form = ({
  children,
  onSubmit,
  className,
  rules,
  defaultValues
}: FormProps) => {
  const form: UseFormReturn = useForm({
    mode: 'onBlur',
    defaultValues,
    resolver: zodResolver(rules)
  })

  return (
    <FormContext.Provider value={form}>
      <form
        className={classNames(className)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormContext.Provider>
  )
}

export default memo(Form)
