import AnimateWrapper from '~/ui/animate-wrapper/AnimateWrapper'
import Text from '~/ui/text/Text'

const AboutMobile = () => (
  <section className="container">
    {Array.from({ length: 6 }).map((_, index) => (
      <AnimateWrapper
        key={index}
        whileInView
        className="py-8"
        variant="yAndOpacity"
      >
        <Text
          as="h3"
          label={`home.about.scroll_title_${index + 1}`}
          className="h3 text-center font-bold text-gray-6 dark:text-gray-2"
        />
        <div className="mt-4 aspect-square rounded-big bg-gradient-to-br from-gray-0 to-coral-4" />
      </AnimateWrapper>
    ))}
  </section>
)

export default AboutMobile
