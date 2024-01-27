'use client'

import HttpStatus from '~/enums/HttpStatusEnum'
import { getDataForRequest, getUrlForRequest } from '~/helpers/util'
import type { BackResponse } from '~/models/BackResponseModel'
import type { MakeRequest } from '~/models/GlobalModels'

export const request = async <T = any>(
  url: string,
  params?: MakeRequest
): Promise<BackResponse<T>> => {
  const method = params?.method ?? 'GET'
  const data = params?.data ?? {}
  const requestOptions = params?.requestOptions ?? {}
  const next = params?.next ?? {}

  let urlForRequest = getUrlForRequest(url)

  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
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

  if (result && result.statusCode === HttpStatus.UNAUTHORIZED) {
    const refreshResponse = await fetch('/api/auth/refresh-tokens', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include'
      }
    })
    const refreshResult: BackResponse = await refreshResponse.json()

    if (refreshResult.result) {
      return request(url, {
        method,
        data,
        requestOptions,
        next
      })
    }
  }

  return result
}
