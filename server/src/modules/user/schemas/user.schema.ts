import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { UserRoleEnum } from '../enums'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
  @Prop({ default: false })
  isActivated: boolean
  @Prop()
  role: UserRoleEnum[]
  @Prop(
    raw({
      firstName: { type: String, default: '' },
      lastName: { type: String, default: '' },
      fatherName: { type: String, default: '' }
    })
  )
  name: Record<string, any>
  @Prop({ default: 0 })
  age: number
  @Prop({ unique: true, required: true })
  email: string
  @Prop({ default: '' })
  password: string
  @Prop({ default: '' })
  provider: string
  @Prop({ default: '' })
  phone: string
  @Prop({ default: '' })
  avatar: string
  @Prop(
    raw({
      country: { type: String, default: '' },
      region: { type: String, default: '' },
      area: { type: String, default: '' },
      street: { type: String, default: '' },
      house: { type: String, default: '' },
      flatNumber: { type: String, default: '' },
      postOffice: { type: String, default: '' }
    })
  )
  address: Record<string, any>
}

export const UserSchema = SchemaFactory.createForClass(User)
