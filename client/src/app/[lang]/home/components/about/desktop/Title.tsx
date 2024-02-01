import classNames from 'classnames'
import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

import Text from '~/ui/text/Text'

interface TitleProps {
  id: string
  title: string
  setActiveTab: (newTab: string) => void
}

const Title = ({ id, title, setActiveTab }: TitleProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isView = useInView(ref, { margin: '-50% 0px -50% 0px' })

  useEffect(() => {
    isView && setActiveTab(id)
  }, [isView])

  const onScrollToTitle = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <div ref={ref}>
      <Text
        as="h3"
        label={title}
        className={classNames(
          'h3 py-32 font-bold transition-colors cursor-pointer',
          isView
            ? 'text-gray-7 dark:text-gray-0'
            : 'text-gray-3 hover:text-gray-7 dark:text-gray-5 hover:dark:text-gray-0'
        )}
        onClick={onScrollToTitle}
      />
    </div>
  )
}

export default Title
