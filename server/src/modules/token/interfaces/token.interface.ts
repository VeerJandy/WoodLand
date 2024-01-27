import { UserRoleEnum } from '~/modules/user/enums'
import { TokenDocument } from '../schemas'

export interface Tokens {
  accessToken: string
  refreshToken: TokenDocument
}

export interface UserForCreateToken {
  userId: string
  role: UserRoleEnum[]
  agent: string
}
