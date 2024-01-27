'use server'

import { request } from '~/helpers/request'

import type UserModel from '../models/UserModel'

export const getUser = async (): Promise<UserModel | null> => {
  const { data } = await request('/user/me')

  return data
}
