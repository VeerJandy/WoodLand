import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

import { durationMedium, durationSmall, easeMedium } from '~/consts/Animate'

import ContentEnum from '../enums/ContentEnum'
import useHeader from '../hooks/useHeader'

interface HeaderButtonProps {
  icon: ReactNode
  content: ContentEnum
}

const HeaderButton = ({ icon, content }: HeaderButtonProps) => {
  const {
    state: { isOpen, isMobile },
    functions: { onSetContent }
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
      onClick={() => onSetContent(content)}
    >
      {icon}
    </motion.div>
  )
}

export default HeaderButton
