import Image from 'next/image'

const Home = () => {
  return (
    <div>
      <Image
        src="https://images.pexels.com/photos/19985060/pexels-photo-19985060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        quality={100}
        priority
        fill
      />
    </div>
  )
}

export default Home
