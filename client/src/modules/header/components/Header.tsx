import useDeviceDetect from '~/hooks/useDeviceDetect'

import HeaderWrapper from './HeaderWrapper'

const Header = () => {
  const isMobile = useDeviceDetect()

  return <HeaderWrapper isMobile={isMobile} />
}

export default Header
