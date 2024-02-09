import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcryptjs'
import * as mongoose from 'mongoose'
import { SignupDto } from '~/modules/auth/dto'
import { UserRoleEnum } from '~/modules/user/enums'
import { User } from './schemas'
import type { UserDocument } from './schemas'
import type { UserDto } from './dto'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userRepository: Model<User>) {}

  public getUserForClient(user: UserDocument): UserDto {
    return {
      id: String(user._id),
      isActivated: user.isActivated,
      isBanned: user.isBanned,
      banReason: user.banReason,
      role: user.role,
      name: {
        firstName: user.name.firstName,
        lastName: user.name.lastName,
        fatherName: user.name.fatherName
      },
      age: user.age,
      email: user.email,
      phone: user.phone,
      avatar: user.avatar,
      address: {
        country: user.address.country,
        region: user.address.region,
        area: user.address.area,
        street: user.address.street,
        house: user.address.house,
        flatNumber: user.address.flatNumber,
        postOffice: user.address.postOffice
      }
    }
  }

  public async create(form: SignupDto): Promise<UserDto> {
    const hashPassword = await bcrypt.hash(form.password, 5)

    const user = await this.userRepository.create({
      email: form.email,
      password: hashPassword,
      role: [UserRoleEnum.User],
      name: {
        firstName: form.firstName,
        lastName: form.lastName
      }
    })

    return this.getUserForClient(user)
  }

  public async activateUser(email: string) {
    await this.userRepository.findOneAndUpdate({ email }, { isActivated: true })
  }

  public async findByEmailOrId(emailOrId: string) {
    const isId = mongoose.Types.ObjectId.isValid(emailOrId)
    const user: UserDocument = isId
      ? await this.userRepository.findById({ _id: emailOrId })
      : await this.userRepository.findOne({ email: emailOrId })

    return user
  }

  public async me(id: string): Promise<UserDto | null> {
    const user = await this.findByEmailOrId(id)

    if (user) return this.getUserForClient(user)
    return null
  }
}
