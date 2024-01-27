import { SignUp } from '../models/AuthModel'

export const signUpDefaultValues: SignUp = {
  email: 'wef@wc.com',
  password: '123123q',
  repeatPassword: '123123q',
  firstName: '123123q',
  lastName: '123123q',
  isAgree: true
}

export const signInDefaultValues = {
  email: '',
  password: ''
}
