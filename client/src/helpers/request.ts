'use server'

import { cookies } from 'next/headers'

import HttpStatus from '~/enums/HttpStatusEnum'
import { getDataForRequest, getUrlForRequest } from '~/helpers/util'
import type { BackResponse } from '~/models/BackResponseModel'
import type { MakeRequest } from '~/models/GlobalModels'

export const request = async <T = any>(
  url: string,
  { method = 'GET', data, requestOptions, next }: MakeRequest
): Promise<BackResponse<T>> => {
  let urlForRequest = getUrlForRequest(url)
  const cookie = cookies()

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: cookie.get('accessToken')?.value ?? '',
      credentials: 'include'
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
  const result: BackResponse<T> = await response.json()

  if (
    result &&
    result.statusCode === HttpStatus.UNAUTHORIZED &&
    cookie.get('refreshToken')
  ) {
    // TODO Refresh tokens
    const refreshResponse = await fetch(
      `${process.env.BACKEND_HOST}/api/refresh`,
      {
        method: 'GET',
        headers: {
          Cookie: cookie
            .getAll()
            .map(c => `${c.name}=${c.value}`)
            .join('; '),
          credentials: 'include'
        }
      }
    )
    const refreshResult: BackResponse = await refreshResponse.json()

    if (refreshResult.result) {
      await request(url, {
        method,
        data,
        requestOptions,
        next
      })
    }
  }

  return result
}
