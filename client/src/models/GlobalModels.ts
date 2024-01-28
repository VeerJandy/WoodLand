export type ClassName = string | string[]
export type ID = string

export type Value<T = string> = T
export type Option<T = string> = {
  title: string
  value: Value<T>
}
export type Options<T = string> = Option<T>[]

export type RequestMethod = 'POST' | 'GET'

export interface MakeRequest {
  method?: RequestMethod
  data?: Object | Record<string, string>
  requestOptions?: RequestInit
  next?: NextFetchRequestConfig
}
