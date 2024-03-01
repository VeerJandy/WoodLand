'use client'

import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import { memo } from 'react'

import Text from '~/ui/text/Text'

import type { UseTabs } from './hooks/useTabs'
import useTabs from './hooks/useTabs'

interface TabsProps extends UseTabs {}

const Tabs = (props: TabsProps) => {
  const {
    state: { head, content, activeTab },
    functions: { onSetActiveTab }
  } = useTabs(props)

  return (
    <div>
      <nav className="no-scroll-bar flex overflow-y-hidden overflow-x-scroll rounded-full bg-white shadow-2xl dark:bg-gray-7">
        {head.map(tab => (
          <div
            role="button"
            key={tab.key}
            className="relative flex-1 cursor-pointer rounded-full px-4 py-2 text-center hover:text-orange-4"
            onClick={() => onSetActiveTab(tab)}
          >
            <Text
              label={tab.title}
              as="span"
              className={classNames(
                'relative z-one transition',
                activeTab === tab.key && 'text-white'
              )}
            />

            {activeTab === tab.key && (
              <motion.div
                layoutId="active-bg"
                className="absolute inset-1 rounded-full bg-gray-8 dark:bg-black"
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
            )}
          </div>
        ))}
      </nav>

      <div className="my-2">
        <AnimatePresence mode="popLayout">{content}</AnimatePresence>
      </div>
    </div>
  )
}

export default memo(Tabs)
