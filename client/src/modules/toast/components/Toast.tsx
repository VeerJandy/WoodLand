'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { memo } from 'react'

import { variants } from '~/consts/Animate'
import IconCheck from '~/ui/icons/IconCheck'
import IconClose from '~/ui/icons/IconClose'
import IconInfo from '~/ui/icons/IconInfo'
import IconWarning from '~/ui/icons/IconWarning'
import Portal from '~/ui/portal/Portal'
import Text from '~/ui/text/Text'

import ToastVariantEnum from '../enum/ToastVariantEnum'
import { getColor } from '../helpers/toastHelper'
import useToastStore from '../store/toastStore'
import styles from './Toast.module.scss'

const Toast = () => {
  const { toasts, removeToast } = useToastStore(state => ({
    toasts: state.toasts,
    removeToast: state.removeToast
  }))

  return (
    <Portal>
      <div className="fixed right-4 top-16 z-toast flex flex-col gap-4">
        <AnimatePresence mode="popLayout">
          {toasts.map(toast => (
            <motion.div
              layoutId={toast.id}
              key={toast.id}
              className={styles.toast}
              {...variants.xAndOpacity}
            >
              <div className={styles.toast__content}>
                {toast.variant === ToastVariantEnum.Info && (
                  <IconInfo className="text-blue-4" size="14" />
                )}
                {toast.variant === ToastVariantEnum.Success && (
                  <IconCheck className="text-green-4" size="14" />
                )}
                {toast.variant === ToastVariantEnum.Warning && (
                  <IconWarning className="text-yellow-4" size="14" />
                )}
                {toast.variant === ToastVariantEnum.Error && (
                  <IconClose className="text-red-4" size="14" />
                )}

                <div>
                  <Text label={toast.title} as="p" className="p" />
                  <Text
                    label={toast.content}
                    as="p"
                    className="span text-gray-2"
                  />
                </div>
                <div
                  role="button"
                  className={styles.toast__close}
                  onClick={() => removeToast(toast.id)}
                >
                  <IconClose size="12" />
                </div>
              </div>
              <motion.div
                initial={{ width: '100%' }}
                animate={{ width: 0 }}
                transition={{ duration: toast.timeout / 1000, ease: 'easeOut' }}
                className={styles.toast__line}
                style={{ background: `var(--${getColor(toast.variant)})` }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Portal>
  )
}

export default memo(Toast)
