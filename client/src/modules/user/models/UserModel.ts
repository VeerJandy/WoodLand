import UserRoleEnum from '../enums/UserRoleEnum'

interface UserModel {
  id: string
  isActivated: boolean
  isBanned: boolean
  banReason: string
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

export default UserModel
