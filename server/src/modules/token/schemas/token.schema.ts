import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { User } from '~/modules/user/schemas'

export type TokenDocument = HydratedDocument<Token>

@Schema()
export class Token {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User
  @Prop({ required: true, unique: true })
  readonly token: string
  @Prop({ required: true })
  readonly expires: Date
  @Prop({ required: true })
  readonly agent: string
}

export const TokenSchema = SchemaFactory.createForClass(Token)
