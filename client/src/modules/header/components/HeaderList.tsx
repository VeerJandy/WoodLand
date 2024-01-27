import { motion } from 'framer-motion'
import type { ForwardedRef, ReactNode } from 'react'
import { Children, forwardRef } from 'react'

import { durationMedium } from '~/consts/Animate'

import useHeader from '../hooks/useHeader'

interface HeaderListProps {
  children: ReactNode
}

const HeaderList = forwardRef(
  ({ children }: HeaderListProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      state: { isOpen }
    } = useHeader()

    return (
      <nav ref={ref} className="flex flex-col">
        {Children.map(children, (child: ReactNode, index) => (
          <motion.li
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              delay: isOpen ? (durationMedium / 2) * (0.2 * index + 1) : 0
            }}
            className="h4"
          >
            {child}
          </motion.li>
        ))}
      </nav>
    )
  }
)

export default HeaderList
