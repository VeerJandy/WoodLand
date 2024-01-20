import type { ID } from '~/models/GlobalModels'

import ToastVariantEnum from '../enum/ToastVariantEnum'

export interface ToastModel {
  id: ID
  title: string
  content: string
  variant: ToastVariantEnum
  timeout: number
}

export type AddToast = Pick<ToastModel, 'content'> &
  Partial<Pick<ToastModel, 'timeout'>>
