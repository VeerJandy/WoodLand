import classNames from 'classnames'
import { useState } from 'react'

import AboutList from '../../../consts/AboutList'
import Card from '../Card'
import Title from './Title'

const AboutDesktop = () => {
  const [activeTab, setActiveTab] = useState('1')

  return (
    <section className="container grid grid-cols-2 gap-8">
      <div className="pb-32 pt-16">
        {AboutList.map(({ id, title }) => (
          <Title key={id} id={id} title={title} setActiveTab={setActiveTab} />
        ))}
      </div>
      <div className="relative py-4">
        <div className="sticky top-[12.5vh] h-[75vh]">
          {AboutList.map(({ id, card }) => (
            <div
              key={id}
              className={classNames(
                'absolute inset-0 transition duration-medium',
                id === activeTab ? 'opacity-100' : 'opacity-0'
              )}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutDesktop
