'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { memo, type ReactNode, useEffect } from 'react'

import { variants } from '~/consts/Animate'
import setBodyLock from '~/helpers/setBodyLock'
import useKeyDown from '~/hooks/useKeyDown'
import Button from '~/ui/button/Button'
import IconClose from '~/ui/icons/IconClose'
import Portal from '~/ui/portal/Portal'
import Text from '~/ui/text/Text'

import styles from './Modal.module.scss'

interface ModalProps {
  title: string
  isOpen: boolean
  children: ReactNode
  onClose: () => void
  onSave?: (args?: unknown) => unknown
}

const Modal = ({ title, isOpen, onClose, children, onSave }: ModalProps) => {
  useEffect(() => {
    setBodyLock(isOpen)
  }, [isOpen])

  useKeyDown(isOpen, onClose)

  return (
    <Portal>
      <AnimatePresence mode="wait">
        {isOpen && (
          <div className={styles.modal}>
            <motion.div
              className={styles.modal__backdrop}
              role="button"
              onClick={onClose}
              {...variants.opacity}
            />
            <motion.div
              layout
              transition={{
                layout: { duration: 0.3 }
              }}
              className={styles.modal__wrapper}
              {...variants.opacity}
            >
              <div className="flex items-center justify-between">
                <Text as="h5" className="h5 text-center" label={title} />
                <Button
                  background="transparent"
                  size="empty"
                  className="size-8"
                  onClick={onClose}
                  icon={<IconClose />}
                />
              </div>

              <div className="mt-4 flex-1">{children}</div>

              {onSave && (
                <div className="flex items-center justify-end gap-6">
                  <p role="button" className="text-red-4" onClick={onClose}>
                    <Text label="common.close" />
                  </p>
                  <Button label="common.save" onClick={onSave} />
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  )
}

export default memo(Modal)
