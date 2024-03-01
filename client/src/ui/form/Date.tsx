'use client'

import 'react-day-picker/dist/style.css'

import classNames from 'classnames'
import { enGB, uk } from 'date-fns/locale'
import { AnimatePresence, motion } from 'framer-motion'
import { memo, useRef } from 'react'
import { DayPicker } from 'react-day-picker'

import { variants } from '~/consts/Animate'
import useClickOutside from '~/hooks/useClickOutside'
import IconArrowDown from '~/ui/icons/IconArrowDown'
import Text from '~/ui/text/Text'

import FieldWrapper from './FieldWrapper'
import styles from './Form.module.scss'
import type { UseDate } from './hooks/useDate'
import useDate from './hooks/useDate'

interface DateProps extends UseDate {
  mode?: 'multiple' | 'single'
  min?: number
  max?: number
  disabled?: boolean
}

const Date = ({ name, mode, min, max, placeholder, disabled }: DateProps) => {
  const {
    state: { locale, selectedDate, fieldState, field, isOpen, label },
    functions: { onSelect, toggle, close }
  } = useDate({ name, placeholder })

  const ref = useRef(null)
  useClickOutside(ref, close)

  return (
    <FieldWrapper
      error={fieldState.error}
      isValue={Boolean(field.value)}
      placeholder={placeholder}
      disabled={disabled}
      onClick={toggle}
      ref={ref}
    >
      <Text as="p" className="flex-1" label={label ?? ''} />
      <IconArrowDown
        size="14"
        className={classNames(
          'transition-transform',
          isOpen ? 'rotate-180' : ''
        )}
      />
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul
            {...variants.height}
            className={styles.date}
            onClick={event => event.stopPropagation()}
          >
            <DayPicker
              mode={mode ?? 'single'}
              min={min}
              max={max}
              locale={locale === 'en' ? enGB : uk}
              showOutsideDays
              selected={selectedDate}
              onSelect={onSelect}
            />
          </motion.ul>
        )}
      </AnimatePresence>
    </FieldWrapper>
  )
}

export default memo(Date)
