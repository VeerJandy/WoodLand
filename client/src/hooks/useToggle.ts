import { useState } from 'react'

type UseToggle = [boolean, () => void, () => void, () => void]

const useToggle = (initialValue?: boolean): UseToggle => {
  const [value, setValue] = useState(initialValue ?? false)

  const toggle = () => setValue(prev => !prev)
  const close = () => setValue(() => false)
  const open = () => setValue(() => true)

  return [value, toggle, close, open]
}

export default useToggle
