import styled from '@emotion/styled'
import { SelectBox } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { ProductList } from '@components/home/ProductList'
import { CategorySlideFilter } from '@components/result/CategorySlideFilter/CategorySlideFilter'

CategorySlideFilter
const ResultContainer = (): ReactElement => {
  //여기서 데이터 패칭
  const cateGoryList = [
    {
      selected: true,
      title: '전체'
    },
    {
      selected: false,
      title: '남성패션/잡화'
    },
    {
      selected: false,
      title: '여성패션/잡화'
    },
    {
      selected: false,
      title: '게임'
    },
    {
      selected: false,
      title: '스포츠/레저'
    },
    {
      selected: false,
      title: '장난감/취미'
    },
    {
      selected: false,
      title: '디지털기기'
    },
    {
      selected: false,
      title: '자동차/공구'
    },
    {
      selected: false,
      title: '생활가전'
    },
    {
      selected: false,
      title: '가구/인테리어'
    },
    {
      selected: false,
      title: '도서/티켓/음반'
    },
    {
      selected: false,
      title: '반려동물'
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
        <CategorySlideFilter cateGoryList={cateGoryList} searchResult="###" />
        <SelectWrapper>
          {/* <SelectBox
            colorType="light"
            items={[
              {
                text: '직거래/택배거래',
                value: '0'
              },
              {
                text: '직거래',
                value: '1'
              },
              {
                text: '택배거래',
                value: '2'
              }
            ]}
            placeholder="거래방식"
            value=""
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={(): void => {}}>
            dadfasds
          </SelectBox>
          <SelectBox
            colorType="light"
            items={[
              {
                text: '직거래/택배거래',
                value: '0'
              },
              {
                text: '직거래',
                value: '1'
              },
              {
                text: '택배거래',
                value: '2'
              }
            ]}
            placeholder="가격"
            value=""
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={(): void => {}}></SelectBox>
          <SelectBox
            colorType="none"
            items={[
              {
                text: '직거래/택배거래',
                value: '0'
              },
              {
                text: '직거래',
                value: '1'
              },
              {
                text: '택배거래',
                value: '2'
              }
            ]}
            placeholder="높은 가격순"
            value=""
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onChange={(): void => {}}>
            dadfasds
          </SelectBox> */}
        </SelectWrapper>

        <ProductList productList={productList} />
      </HomeWrapper>
    </Layout>
  )
}

const HomeWrapper = styled.div`
  border: solid;
  max-width: 1200px;
  width: 100%;
`

const Layout = styled.div`
  display: flex;
  justify-content: center;
  border: solid;
  width: 100%;
  margin-top: 68px;
`

const SelectWrapper = styled.div`
  display: flex;
  margin-top: 25px;
`
export { ResultContainer }
