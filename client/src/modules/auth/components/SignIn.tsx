'use client'

import { forwardRef } from 'react'

import { variants } from '~/consts/Animate'
import Button from '~/ui/button/Button'
import { MotionForm } from '~/ui/form/Form'
import Input from '~/ui/form/Input'

import { signInDefaultValues } from '../config/defaultValues'
import { signInSchema } from '../config/rules'
import useAuth from '../hooks/useAuth'

const SignIn = forwardRef(() => {
  const {
    functions: { onSubmit },
    state: { isLoading }
  } = useAuth('/auth/signin', true)

  return (
    <MotionForm
      defaultValues={signInDefaultValues}
      rules={signInSchema}
      onSubmit={onSubmit}
      className="flex flex-col gap-8"
      loading={isLoading}
      {...variants.opacity}
    >
      <Input name="email" placeholder="Email" type="email" autoComplete="off" />
      <Input
        name="password"
        placeholder="common.password"
        type="password"
        autoComplete="off"
      />

      <Button
        type="submit"
        label="common.create"
        className="mx-auto mt-4"
        loading={isLoading}
      />
    </MotionForm>
  )
})

export default SignIn
