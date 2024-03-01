import classNames from 'classnames'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { memo, useContext } from 'react'
import { useController } from 'react-hook-form'

import { FormContext } from '~/ui/form/Form'
import Text from '~/ui/text/Text'

import FieldWrapper from './FieldWrapper'
import styles from './Form.module.scss'

interface CheckboxProps {
  name: string
  label?: string
  children?: ReactNode
}

const Checkbox = ({ name, label, children }: CheckboxProps) => {
  const form = useContext(FormContext)!
  const { field, fieldState } = useController({ name, control: form.control })

  return (
    <FieldWrapper
      error={fieldState.error}
      isValue={Boolean(field.value)}
      transparent
    >
      <label className="relative flex w-full cursor-pointer items-center gap-2">
        <input type="checkbox" className="absolute hidden" {...field} />

        <span
          className={classNames(
            styles.checkbox,
            field.value && styles.checkbox__active,
            fieldState.error && styles.checkbox__error
          )}
        >
          <motion.span
            layout="position"
            transition={{
              type: 'spring',
              stiffness: 700,
              damping: 30
            }}
          />
        </span>

        <span>{label ? <Text label={label} /> : children}</span>
      </label>
    </FieldWrapper>
  )
}

export default memo(Checkbox)
