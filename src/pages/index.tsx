// import * as imag from '/public/assets/images/category_appliance.png'
import { IMAGE } from '@constants'
import Image from 'next/image'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return <Image alt="imag" src={IMAGE.CATEGORY_CAR} />
}

export default Home
