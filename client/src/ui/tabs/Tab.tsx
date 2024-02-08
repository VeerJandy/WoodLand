'use client'

import { motion } from 'framer-motion'
import type { ForwardedRef, ReactNode } from 'react'
import { forwardRef, memo } from 'react'

import { variants } from '~/consts/Animate'
import RouterEnum from '~/enums/RouterEnum'

interface TabProps {
  title: string
  children?: ReactNode
  href?: RouterEnum
}

const Tab = forwardRef(
  ({ children }: TabProps, ref: ForwardedRef<HTMLDivElement>) => (
    <motion.div ref={ref} {...variants.opacity}>
      {children}
    </motion.div>
  )
)

export default memo(Tab)
