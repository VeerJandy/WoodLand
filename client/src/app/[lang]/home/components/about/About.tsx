'use client'

import useAdaptiveStore from '~/store/adaptiveStore'

import AboutDesktop from './desktop/AboutDesktop'
import AboutMobile from './mobile/AboutMobile'

interface AboutProps {
  isMobile: boolean
}

const About = ({ isMobile: isMobileServer }: AboutProps) => {
  const isMobile = useAdaptiveStore(state => state.isMobile)

  if (isMobile === null)
    return isMobileServer ? <AboutMobile /> : <AboutDesktop />

  return isMobile ? <AboutMobile /> : <AboutDesktop />
}

export default About
