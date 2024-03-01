import { useEffect, useState } from 'react'

import { getStorageItem, setStorageItem } from '~/helpers/storage'

type UseLocalStorage<T> = [T, (value: T) => void]

const useLocalStorage = <T = unknown>(
  key: string,
  initialValue?: T
): UseLocalStorage<T> => {
  const [value, setValue] = useState<T>(
    getStorageItem(key, initialValue ?? null)
  )

  useEffect(() => setStorageItem(key, value), [value])

  return [value, setValue]
}

export default useLocalStorage
