import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { useRef } from 'react'

import { variants } from '~/consts/Animate'
import useClickOutside from '~/hooks/useClickOutside'
import { ClassName } from '~/models/GlobalModels'
import IconArrowDown from '~/ui/icons/IconArrowDown'
import IconCheck from '~/ui/icons/IconCheck'
import Text from '~/ui/text/Text'

import FieldWrapper from './FieldWrapper'
import styles from './Form.module.scss'
import type { UseSelect } from './hooks/useSelect'
import useSelect from './hooks/useSelect'

interface SelectProps extends UseSelect {
  placeholder?: string
  className?: ClassName
}

const Select = (props: SelectProps) => {
  const ref = useRef(null)
  const {
    state: { isOpen, selectLabel, fieldState, field },
    functions: { toggle, close, isOptionCheck, onSetValue }
  } = useSelect(props)
  useClickOutside(ref, close)

  return (
    <FieldWrapper
      error={fieldState.error}
      isValue={Boolean(field.value)}
      placeholder={props.placeholder}
      disabled={props.disabled}
      className={props.className}
      onClick={toggle}
      ref={ref}
    >
      <Text as="p" className="flex-1" label={selectLabel} />
      <IconArrowDown
        size="14"
        className={classNames(
          'transition-transform text-white',
          isOpen && 'rotate-180'
        )}
      />

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul
            {...variants.height}
            className={classNames(styles.select, 'scroll-bar')}
          >
            {props.options.map(option => (
              <li
                key={option.value}
                className={styles.select__item}
                onClick={() => onSetValue(option)}
              >
                <Text as="span" label={option.title} className="flex-1" />
                <motion.span
                  initial={false}
                  animate={{
                    opacity: isOptionCheck(option) ? 1 : 0
                  }}
                >
                  <IconCheck size="14" />
                </motion.span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </FieldWrapper>
  )
}

export default Select
