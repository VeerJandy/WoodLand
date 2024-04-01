export type ClassName = string | string[]
export type ID = string

export type Value<T = string> = T
export type Option<T = string> = {
  title: string
  value: Value<T>
}
export type Options<T = string> = Option<T>[]
