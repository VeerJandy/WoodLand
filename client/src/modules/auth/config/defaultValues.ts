import { SignUp } from '../models/AuthModel'

export const SignUpDefaultValues: SignUp = {
  email: '',
  password: '',
  repeatPassword: '',
  firstName: '',
  lastName: '',
  isAgree: false
}

export const SignInDefaultValues = {
  email: '',
  password: ''
}
