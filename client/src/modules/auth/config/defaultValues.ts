import { SignUp } from '../models/AuthModel'

export const signUpDefaultValues: SignUp = {
  email: '',
  password: '',
  repeatPassword: '',
  firstName: '',
  lastName: '',
  isAgree: false
}

export const signInDefaultValues = {
  email: '',
  password: ''
}
