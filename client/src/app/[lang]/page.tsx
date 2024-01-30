import useDeviceDetect from '~/hooks/useDeviceDetect'

import About from './home/components/about/About'
import Banner from './home/components/Banner'
import Novelty from './home/components/novelty/Novelty'
import Popular from './home/components/popular/Popular'

const Home = () => {
  const isMobile = useDeviceDetect()

  return (
    <>
      <Banner />
      <About isMobile={isMobile} />
      <Novelty />
      <Popular />
    </>
  )
}

export default Home
