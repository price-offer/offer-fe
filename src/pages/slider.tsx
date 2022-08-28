import Carousel from '@components/Carousel'
import { IMAGE } from '@constants'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const image = [
    { id: 1, url: `${IMAGE.CATEGORY_CAR.src}` },
    { id: 2, url: `${IMAGE.CATEGORY_APPLIANCE.src}` }
  ]
  return (
    <div>
      <Carousel images={image} isArrow />
    </div>
  )
}

export default Home
