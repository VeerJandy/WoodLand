import AnimateWrapper from '~/ui/animate-wrapper/AnimateWrapper'
import Text from '~/ui/text/Text'

import AboutList from '../../../consts/AboutList'
import Card from '../Card'

const AboutMobile = () => (
  <section className="container">
    {AboutList.map(({ id, title, card }) => (
      <AnimateWrapper
        key={id}
        whileInView
        className="py-8"
        variant="yAndOpacity"
        margin="-250px"
        once
      >
        <Text
          as="h3"
          label={title}
          className="h3 text-center font-bold text-gray-6 dark:text-gray-2"
        />
        <Card {...card} />
      </AnimateWrapper>
    ))}
  </section>
)

export default AboutMobile
