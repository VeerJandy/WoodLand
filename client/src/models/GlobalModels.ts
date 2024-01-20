export type ClassName = string | string[]

export type RequestMethod = 'POST' | 'GET'

export interface MakeRequest {
  url: string
  method?: RequestMethod
  data?: Object | Record<string, string>
  requestOptions?: RequestInit
  next?: NextFetchRequestConfig
}
