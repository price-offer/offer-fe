import styled from '@emotion/styled'
import type { ReactElement } from 'react'
import { ProductList } from '../../components/home/ProductList'
import { IMAGE } from '../../constants/images'
import { CategorySlider } from '@components/home/CategorySlider/CategorySlider'
import { HomeBanner } from '@components/home/HomeBanner'

const HomeContainer = (): ReactElement => {
  //여기서 데이터 패칭
  const cateGoryList = [
    {
      imageUrl: `${IMAGE.CATEGORY_MAN_GOODS_PC}`,
      title: '남성패션/잡화',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_WOMAN_GOODS_PC}`,
      title: '여성패션/잡화',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_GAME_PC}`,
      title: '게임',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_SPORTS_PC}`,
      title: '스포츠/레저',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_TOY_PC}`,
      title: '장난감/취미',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_DIGITAL_DIVICE_PC}`,
      title: '디지털기기',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_CAR_PC}`,
      title: '자동차/공구',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_APPLIANCE_PC}`,
      title: '생활가전',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_DIGITAL_FURNITURE_PC}`,
      title: '가구/인테리어',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_BOOK_PC}`,
      title: '도서/티켓/음반',
      url: 'string'
    },
    {
      imageUrl: `${IMAGE.CATEGORY_ECT_PC}`,
      title: '더보기',
      url: 'string'
    }
  ]

  const productList = [
    {
      address: 'string',
      imageUrl: 'string',
      price: 'string',
      title: 'string',
      url: 'string'
    },
    {
      address: 'string',
      imageUrl: 'string',
      price: 'string',
      title: 'string',
      url: 'string'
    },
    {
      address: 'string',
      imageUrl: 'string',
      price: 'string',
      title: 'string',
      url: 'string'
    },
    {
      address: 'string',
      imageUrl: 'string',
      price: 'string',
      title: 'string',
      url: 'string'
    },
    {
      address: 'string',
      imageUrl: 'string',
      price: 'string',
      title: 'string',
      url: 'string'
    }
  ]

  return (
    <Layout>
      <HomeWrapper>
        <HomeBanner />
        <CategorySlider imageList={cateGoryList} />
        <ProductList productList={productList} />
      </HomeWrapper>
    </Layout>
  )
}

const HomeWrapper = styled.div`
  border: solid;
  max-width: 1200px;
  width: 100%;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    padding-left: 24px;
    padding-right: 24px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    padding-left: 16px;
    padding-right: 16px;
  }
`

const Layout = styled.div`
  display: flex;
  justify-content: center;
  border: solid;
  width: 100%;
  margin-top: 68px;
`
export { HomeContainer }
