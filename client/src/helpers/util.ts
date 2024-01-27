import type { RequestMethod } from '~/models/GlobalModels'

export function on<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args: Parameters<T['addEventListener']> | [string, Function | null, ...any]
): void {
  if (obj && obj.addEventListener) {
    obj.addEventListener(
      ...(args as Parameters<HTMLElement['addEventListener']>)
    )
  }
}

export function off<T extends Window | Document | HTMLElement | EventTarget>(
  obj: T | null,
  ...args:
    | Parameters<T['removeEventListener']>
    | [string, Function | null, ...any]
): void {
  if (obj && obj.removeEventListener) {
    obj.removeEventListener(
      ...(args as Parameters<HTMLElement['removeEventListener']>)
    )
  }
}

export const isBrowser = typeof window !== 'undefined'

export const isIncludeHttps = (url: string): boolean =>
  url.includes('http') || url.includes('https')

export function getUrlForRequest(url: string): string {
  let urlForRequest: string

  if (isIncludeHttps(url)) {
    urlForRequest = url
  } else {
    if (url.slice(0, 1) === '/') {
      urlForRequest = `/api${url}`
    } else {
      urlForRequest = `/api/${url}`
    }

    if (process && process.env.BACKEND_HOST && !isIncludeHttps(url)) {
      urlForRequest = process.env.BACKEND_HOST + urlForRequest
    }
  }

  return urlForRequest
}

export function getDataForRequest(
  url: string,
  method: RequestMethod,
  data?: Object | Record<string, string>
): string {
  let dataForRequest: string

  if (method === 'GET') {
    const dataParams: Record<string, string> = {}
    Object.entries(data ?? {}).map(([key, value]) => {
      if (value === 'object')
        throw new Error(
          `'object' type is not supported in GET request. Url: ${url}`
        )

      dataParams[key] = String(value)
    })
    const params = new URLSearchParams(dataParams)
    dataForRequest = decodeURIComponent(params.toString())
  } else {
    dataForRequest = JSON.stringify(data)
  }

  return dataForRequest
}
