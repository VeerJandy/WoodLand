import { useEffect } from 'react'

import KeyButtonEnum from '~/enums/KeyButtonEnum'

const useKeyDown = (
  trigger: any,
  handler: () => void,
  key: KeyButtonEnum = KeyButtonEnum.Escape
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (key && event.key === key) {
        event.preventDefault()
        handler()
      }
    }

    if (trigger) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [trigger])
}

export default useKeyDown
