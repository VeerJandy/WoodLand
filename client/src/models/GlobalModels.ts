export type ClassName = string | string[]
export type ID = string

export type RequestMethod = 'POST' | 'GET'

export interface MakeRequest {
  method?: RequestMethod
  data?: Object | Record<string, string>
  requestOptions?: RequestInit
  next?: NextFetchRequestConfig
}
