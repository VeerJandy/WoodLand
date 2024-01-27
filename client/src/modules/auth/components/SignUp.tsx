'use client'

import { forwardRef } from 'react'

import { variants } from '~/consts/Animate'
import RouterEnum from '~/enums/RouterEnum'
import AppLink from '~/ui/app-link/AppLink'
import Button from '~/ui/button/Button'
import Checkbox from '~/ui/form/Checkbox'
import { MotionForm } from '~/ui/form/Form'
import Input from '~/ui/form/Input'
import IconArrowLink from '~/ui/icons/IconArrowLink'
import Text from '~/ui/text/Text'

import { signUpDefaultValues } from '../config/defaultValues'
import { signUpSchema } from '../config/rules'
import useAuth from '../hooks/useAuth'

const SignUp = forwardRef(() => {
  const {
    functions: { close, onSubmit },
    state: { isLoading }
  } = useAuth('/auth/sign-up', true)

  return (
    <MotionForm
      defaultValues={signUpDefaultValues}
      rules={signUpSchema}
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
      <Input
        name="repeatPassword"
        placeholder="common.repeat_password"
        type="password"
        autoComplete="off"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input
          name="firstName"
          placeholder="common.first_name"
          autoComplete="off"
        />
        <Input
          name="lastName"
          placeholder="common.last_name"
          autoComplete="off"
        />
      </div>
      <Checkbox name="isAgree">
        <span className="flex gap-1">
          <Text label="auth.is_agree_text" />
          <AppLink
            href={RouterEnum.Terms}
            className="a flex items-center gap-1"
            onClick={close}
          >
            <Text label="auth.is_agree_link" />
            <IconArrowLink size="10" />
          </AppLink>
        </span>
      </Checkbox>

      <Button
        type="submit"
        label="common.create"
        className="mx-auto mt-4"
        loading={isLoading}
      />
    </MotionForm>
  )
})

export default SignUp
