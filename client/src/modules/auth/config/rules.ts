import type { ZodType } from 'zod'
import { boolean, object, string } from 'zod'

import type { SignIn, SignUp } from '../models/AuthModel'

const PASSWORD_MIN_LENGTH = 6
const PASSWORD_MAX_LENGTH = 20
const passwordValidation = new RegExp(
  `^(?=.*\\d)(?=.*[a-z])(?=.*[a-zA-Z]).{${PASSWORD_MIN_LENGTH},${PASSWORD_MAX_LENGTH}}$`
)

export const signUpSchema: ZodType<SignUp> = object({
  email: string().email('invalid_email').trim().min(1, 'email_is_required'),
  password: string()
    .trim()
    .min(PASSWORD_MIN_LENGTH, 'min_length_password')
    .max(PASSWORD_MAX_LENGTH, 'max_length_password')
    .regex(passwordValidation, 'password_is_invalid'),
  repeatPassword: string()
    .trim()
    .min(PASSWORD_MIN_LENGTH, 'min_length_password')
    .max(PASSWORD_MAX_LENGTH, 'max_length_password')
    .regex(passwordValidation, 'password_is_invalid'),
  firstName: string().trim().min(1, 'first_name_is_required'),
  lastName: string().trim().min(1, 'last_name_is_required'),
  isAgree: boolean().refine(value => value, { message: 'is_agree_is_required' })
}).refine(data => data.password === data.repeatPassword, {
  message: 'passwords_dont_match',
  path: ['repeatPassword']
})

export const signInSchema: ZodType<SignIn> = object({
  email: string().email('invalid_email').trim().min(1, 'email_is_required'),
  password: string()
    .trim()
    .min(PASSWORD_MIN_LENGTH, 'min_length_password')
    .max(PASSWORD_MAX_LENGTH, 'max_length_password')
    .regex(passwordValidation, 'password_is_invalid')
})
