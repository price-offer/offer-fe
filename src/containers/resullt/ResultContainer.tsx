import styled from '@emotion/styled'
import { useMedia } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { ProductList } from '@components/home/ProductList'
import { ResultHeader } from '@components/result/CategoryHeader'
import { CategorySlideFilter } from '@components/result/CategorySlideFilter/CategorySlideFilter'
import { FilterSelect } from '@components/result/FilterSelect'
import useCategoryFilterList from '@hooks/useCategoryFilterList'

const ResultContainer = (): ReactElement => {
  const { desktop } = useMedia()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (desktop) setIsDesktop(true)
    else {
      setIsDesktop(false)
    }
  }, [desktop])
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
      address: 'string1',
      imageUrl: 'string1',
      price: 'string1',
      title: 'string1',
      url: 'string1'
    },
    {
      address: 'string2',
      imageUrl: 'string2',
      price: 'string2',
      title: 'string2',
      url: 'string2'
    },
    {
      address: 'string3',
      imageUrl: 'string3',
      price: 'string3',
      title: 'string3',
      url: 'string3'
    },
    {
      address: 'string4',
      imageUrl: 'string4',
      price: 'string4',
      title: 'string4',
      url: 'string4'
    },
    {
      address: 'string5',
      imageUrl: 'string5',
      price: 'string5',
      title: 'string5',
      url: 'string5'
    }
  ]

  const { checkFilterList, onCheckItem } = useCategoryFilterList(cateGoryList)
  return (
    <Layout>
      <HomeWrapper>
        <ResultHeader searchResult="###"></ResultHeader>
        {isDesktop && (
          <CategorySlideFilter
            cateGoryList={checkFilterList}
            onCategoryClick={onCheckItem}
          />
        )}
        <FilterSelect></FilterSelect>
        <ProductList productList={productList} />
      </HomeWrapper>
    </Layout>
  )
}

const HomeWrapper = styled.div`
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
  width: 100%;
  margin-top: 68px;
`

export { ResultContainer }
