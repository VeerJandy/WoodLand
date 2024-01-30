'use server'

import { requestServer } from '~/helpers/requestServer'

import type UserModel from '../models/UserModel'

export const getUser = async (): Promise<UserModel | null> => {
  try {
    const { data: user } = await requestServer('/user/me', {
      next: { revalidate: 0 }
    })

    return user
  } catch (e) {
    return null
  }
}
