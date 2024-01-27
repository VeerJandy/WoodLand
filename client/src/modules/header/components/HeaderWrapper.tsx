'use client'

import useAdaptiveStore from '~/store/adaptiveStore'

import HeaderDesktop from './desktop/HeaderDesktop'
import HeaderMobile from './mobile/HeaderMobile'

interface HeaderWrapperProps {
  isMobile: boolean
}

const HeaderWrapper = ({ isMobile: isMobileServer }: HeaderWrapperProps) => {
  const isMobile = useAdaptiveStore(state => state.isMobile)

  if (isMobile === null)
    return isMobileServer ? <HeaderMobile /> : <HeaderDesktop />

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />
}

export default HeaderWrapper
