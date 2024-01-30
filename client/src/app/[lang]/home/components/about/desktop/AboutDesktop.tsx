import { useState } from 'react'

import Title from './Title'

const AboutDesktop = () => {
  const [activeTab, setActiveTab] = useState('1')

  return (
    <section className="container grid grid-cols-2">
      <div className="">
        {Array.from({ length: 6 }).map((_, index) => (
          <Title
            key={index}
            id={String(index + 1)}
            title={`home.about.scroll_title_${index + 1}`}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
      <div className="relative py-24">
        <div className="sticky top-24 aspect-square rounded-big bg-gradient-to-br from-gray-0 to-coral-4 p-4">
          {JSON.stringify(activeTab)}
        </div>
      </div>
    </section>
  )
}

export default AboutDesktop
