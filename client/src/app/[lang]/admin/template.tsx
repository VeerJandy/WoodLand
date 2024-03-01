'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'

import { variants } from '~/consts/Animate'

interface TemplateProps {
  children: ReactNode
}

const Template = ({ children }: TemplateProps) => (
  <AnimatePresence>
    <motion.section {...variants.opacity}>{children}</motion.section>
  </AnimatePresence>
)

export default Template
