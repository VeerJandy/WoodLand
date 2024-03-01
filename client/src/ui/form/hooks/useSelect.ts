import { useContext } from 'react'
import { useController } from 'react-hook-form'

import useToggle from '~/hooks/useToggle'
import type { Option, Options } from '~/models/GlobalModels'
import { FormContext } from '~/ui/form/Form'

export interface UseSelect {
  name: string
  options: Options
  placeholder?: string
  multiple?: boolean
  disabled?: boolean
  onChange?: (option: Option) => void
}

const useSelect = ({ name, multiple, disabled, onChange }: UseSelect) => {
  const form = useContext(FormContext)!
  const { field, fieldState } = useController({ name, control: form.control })
  const [isOpen, toggle, close] = useToggle()

  const selectLabel = (): string => {
    if (!field.value) return ''

    if (multiple) {
      if (!field.value.length) return ''
      return field.value
        .reduce((acc: string, item: Option) => acc + `${item.title}, `, '')
        .slice(0, -2)
    }

    return field.value.title ? field.value.title : ''
  }

  const isOptionCheck = (option: Option) => {
    if (!field.value) return false

    if (multiple)
      return field.value.some((item: Option) => item.value === option.value)

    return option.value === field.value.value
  }

  const onSetValue = (option: Option) => {
    if (disabled) return

    if (multiple) {
      close()
      const values: Options = field.value ? [...field.value] : []
      const optionInArray = values.find(value => value.value === option.value)

      if (optionInArray) {
        values.splice(values.indexOf(optionInArray), 1)
        values.length >= 1 && field.onChange(values)
        return
      }

      values.push(option)
      field.onChange(values)
      return
    }

    field.onChange(option)
    onChange && onChange(option)
  }

  return {
    state: { isOpen, selectLabel: selectLabel(), fieldState, field },
    functions: { toggle, close, isOptionCheck, onSetValue }
  }
}

export default useSelect
