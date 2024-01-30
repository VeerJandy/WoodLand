'use client'

import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { memo } from 'react'

import type { AnimateVariantKeys } from '~/consts/Animate'
import { variants } from '~/consts/Animate'
import type { ClassName } from '~/models/GlobalModels'

interface AnimateWrapperProps {
  children: ReactNode
  variant?: AnimateVariantKeys
  whileInView?: boolean
  margin?: string
  once?: boolean
  duration?: 0.3 | 0.5
  delay?: number
  className?: ClassName
}

const AnimateWrapper = ({
  children,
  variant,
  whileInView,
  margin,
  once,
  duration,
  delay,
  className
}: AnimateWrapperProps) => {
  const params = {
    animate: whileInView ? undefined : 'visible',
    whileInView: whileInView ? 'visible' : undefined,
    viewport: { margin: margin ?? '-100px', once },
    transition: { duration: duration ?? 0.5, ease: [0, 0, 0.5, 1], delay }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        {...variants[variant ?? 'opacity']}
        {...params}
        className={classNames(className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default memo(AnimateWrapper)
