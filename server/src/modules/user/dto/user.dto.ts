import { UserRoleEnum } from '../enums'

export class UserDto {
  id: string
  isActivated: boolean
  role: UserRoleEnum[]
  name: {
    firstName: string
    lastName: string
    fatherName: string
  }
  age: number
  email: string
  phone: string
  avatar: string
  address: {
    country: string
    region: string
    area: string
    street: string
    house: string
    flatNumber: string
    postOffice: string
  }
}
