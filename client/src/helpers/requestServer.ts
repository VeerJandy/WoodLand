'use server'

import { cookies } from 'next/headers'

import { getDataForRequest, getUrlForRequest } from '~/helpers/util'
import { BackResponse } from '~/models/BackResponseModel'
import { MakeRequest } from '~/models/GlobalModels'

export const requestServer = async <T = any>(
  url: string,
  params?: MakeRequest
): Promise<BackResponse<T>> => {
  const method = params?.method ?? 'GET'
  const data = params?.data ?? {}
  const requestOptions = params?.requestOptions ?? {}
  const next = params?.next ?? {}

  let urlForRequest = getUrlForRequest(url)
  const cookie = cookies()

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      credentials: 'include',
      Cookie: cookie
        .getAll()
        .map(c => `${c.name}=${c.value}`)
        .join('; ')
    }
  }

  const dataForRequest = getDataForRequest(url, method, data)
  method === 'GET'
    ? (urlForRequest += `?${dataForRequest}`)
    : (options.body = dataForRequest)

  const response = await fetch(urlForRequest, {
    ...options,
    ...requestOptions,
    ...next
  })
  return await response.json()
}
