'use client'

import { useRouter } from 'next/navigation'
import { forwardRef } from 'react'

import { variants } from '~/consts/Animate'
import RouterEnum from '~/enums/RouterEnum'
import Button from '~/ui/button/Button'
import { MotionForm } from '~/ui/form/Form'
import Input from '~/ui/form/Input'
import Text from '~/ui/text/Text'

import { SignInDefaultValues } from '../config/defaultValues'
import { signInSchema } from '../config/rules'
import useAuth from '../hooks/useAuth'

const SignIn = forwardRef(() => {
  const router = useRouter()
  const {
    functions: { submit },
    state: { isLoading }
  } = useAuth('/auth/sign-in')

  const onForgotPassword = (email: string) => {
    router.push(RouterEnum.ForgotPassword + `?email=${email}`)
  }

  return (
    <MotionForm
      defaultValues={SignInDefaultValues}
      rules={signInSchema}
      onSubmit={submit}
      className="flex flex-col"
      loading={isLoading}
      {...variants.opacity}
      render={({ getValues }) => (
        <>
          <Input
            name="email"
            placeholder="Email"
            type="email"
            autoComplete="off"
          />
          <Input
            name="password"
            placeholder="common.password"
            type="password"
            autoComplete="off"
            className="mt-8"
          />
          <div className="mt-4 flex justify-center">
            <Text
              label="auth.forgot_password"
              as="p"
              className="a"
              onClick={() => onForgotPassword(getValues('email'))}
            />
          </div>

          <Button
            type="submit"
            label="common.sign_in"
            className="mx-auto mt-8"
            loading={isLoading}
          />
        </>
      )}
    />
  )
})

export default SignIn
