import { HttpStatus } from '@nestjs/common'

export type Message = { [key: string]: string | string[] }[]

export interface BackResponse<T = any> {
  result: boolean
  statusCode?: HttpStatus
  message: Message
  data?: T
}
