import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

import { durationMedium, durationSmall, easeMedium } from '~/consts/Animate'

import useHeader from '../hooks/useHeader'

interface HeaderButtonProps {
  icon: ReactNode
  onClick?: (args?: unknown) => void
}

const HeaderButton = ({ icon, onClick }: HeaderButtonProps) => {
  const {
    state: { isOpen, isMobile }
  } = useHeader()

  return (
    <motion.div
      animate={{ opacity: isMobile && isOpen ? 0 : 1 }}
      transition={{
        duration: isOpen ? durationSmall : durationMedium,
        ease: easeMedium
      }}
      role="button"
      className="relative z-medium flex size-12 items-center justify-center"
      onClick={onClick}
    >
      {icon}
    </motion.div>
  )
}

export default HeaderButton
