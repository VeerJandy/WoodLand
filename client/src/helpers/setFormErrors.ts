import type { UseFormSetError } from 'react-hook-form'

import type { Message } from '~/models/BackResponseModel'

const setFormErrors = (message: Message, setError: UseFormSetError<any>) => {
  if (!message || !message.length) return

  Object.entries(message[0]).map(([key, value]) => {
    setError(key, { message: value ? (value as string) : ' ' })
  })
}

export default setFormErrors
