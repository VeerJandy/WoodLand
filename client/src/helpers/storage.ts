import { isBrowser } from '~/helpers/util'

export const getStorageItem = <T = any>(key: string, initialValue?: any): T => {
  if (!isBrowser) return initialValue ?? null

  const storage = localStorage.getItem(key)

  if (storage) return JSON.parse(storage)
  return initialValue ?? null
}

export const setStorageItem = (key: string, value: any) => {
  if (!isBrowser) return

  localStorage.setItem(key, JSON.stringify(value))
}

export const removeStorageItem = (key: string) => {
  if (!isBrowser) return
  localStorage.removeItem(key)
}
