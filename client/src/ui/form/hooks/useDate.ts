import { format } from 'date-fns'
import { usePathname } from 'next/navigation'
import { useContext, useState } from 'react'
import { useController } from 'react-hook-form'

import useToggle from '~/hooks/useToggle'
import type { Locale } from '~/i18n/i18n'
import { FormContext } from '~/ui/form/Form'

export interface UseDate {
  name: string
  placeholder?: string
}

const FORMAT = 'MM/dd/yyyy'
const FORMAT_FOR_SHOW = 'PP'

const useDate = ({ name, placeholder }: UseDate) => {
  const locale = usePathname().slice(1, 3) as Locale
  const form = useContext(FormContext)!
  const { field, fieldState } = useController({ name, control: form.control })
  const [isOpen, toggle, close] = useToggle()

  const [selectedDate, setSelectedDate] = useState<any>()
  const onSelect = (date?: Date | Date[] | any) => {
    console.log('date', date)
    setSelectedDate(() => date)
    if (!date && field.value) {
      field.onChange('')
      return
    }
    if (!date) return

    if (Array.isArray(date)) {
      field.onChange(date.map(date => format(date, FORMAT)))
      return
    }

    field.onChange(format(date, FORMAT))
    close()
  }

  const label = field.value
    ? format(new Date(field.value), FORMAT_FOR_SHOW)
    : placeholder

  return {
    state: {
      selectedDate,
      locale,
      fieldState,
      field,
      isOpen,
      label
    },
    functions: {
      onSelect,
      toggle,
      close
    }
  }
}

export default useDate
