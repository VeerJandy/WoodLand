export interface SignIn {
  email: string
  password: string
}

export interface SignUp extends SignIn {
  repeatPassword: string
  firstName: string
  lastName: string
  isAgree: boolean
}
