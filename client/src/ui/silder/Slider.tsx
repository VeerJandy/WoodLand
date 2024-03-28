import classNames from 'classnames'
import { memo, ReactNode } from 'react'

import Text from '~/ui/text/Text'

import type { UseSlider } from './hooks/useSlider'
import useSlider from './hooks/useSlider'
import styles from './Slider.module.scss'

interface SliderProps extends UseSlider {
  title?: string
  items: any[]
  render: (item: any) => ReactNode
}

const Slider = ({ title, items, render }: SliderProps) => {
  const {} = useSlider({})

  return (
    <div>
      {title && <Text label={title} as="h3" className="h3 font-bold" />}
      <div className={classNames(styles.slider, 'no-scroll-bar mt-4')}>
        {items.map((item, index) => (
          <div key={index} className={styles.slider__item}>
            {render(item)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(Slider)
