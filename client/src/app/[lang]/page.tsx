import { Suspense } from 'react'

import Banner from './home/components/Banner'

const Home = () => (
  <>
    <Suspense fallback={<p>L</p>}>
      <Banner />
    </Suspense>
  </>
)

export default Home
