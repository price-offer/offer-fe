import { CategorySlider } from '@components/home/CategorySlider'
import { HomeBanner } from '@components/home/HomeBanner'
import { ProductList } from '../../components/home/ProductList'

import type { ReactElement } from 'react'

const HomeContainer = (): ReactElement => {
  //여기서 데이터 패칭
  const cateGoryList = [
    {
      imageUrl: 'string',
      title: ' string',
      url: 'string'
    }
  ]

  const productList = [
    {
      imageUrl: 'string',
      price: 'string',
      title: 'string',
      url: 'string'
    }
  ]

  return (
    <>
      <HomeBanner />
      <CategorySlider imageList={cateGoryList} />
      <ProductList productList={productList} />
    </>
  )
}
export { HomeContainer }
