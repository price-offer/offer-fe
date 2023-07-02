import styled from '@emotion/styled'
import { useMedia } from '@offer-ui/react'
import type { NextPage } from 'next'

import { useEffect, useState } from 'react'
import { ProductList } from '@components/home/ProductList'
import { ResultHeader } from '@components/result/CategoryHeader'
import { CategorySlideFilter } from '@components/result/CategorySlideFilter/CategorySlideFilter'
import { FilterSelect } from '@components/result/FilterSelect'
import useCategoryFilterList from '@hooks/useCategoryFilterList'

const Result: NextPage = () => {
  const { desktop } = useMedia()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    if (desktop) setIsDesktop(true)
    else {
      setIsDesktop(false)
    }
  }, [desktop])

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

  const apiRes = {
    elements: [
      {
        id: 5,
        mainImageUrl: 'string',
        title: 'string',
        price: 8000,
        tradeArea: '서울시 강남구',
        tradeStatus: {
          code: 4,
          name: '판매중'
        },
        createdDate: '2021-12-10T14:23:53',
        modifiedDate: '2021-12-10T14:23:53',
        isLiked: false,
        likeCount: 0,
        isReviewed: false,
        sellerNickName: 'hypeboy'
      },
      {
        id: 4,
        mainImageUrl: 'string',
        title: 'string',
        price: 8000,
        tradeArea: '서울시 강남구',
        tradeStatus: {
          code: 4,
          name: '판매중'
        },
        createdDate: '2021-12-10T14:23:53',
        modifiedDate: '2021-12-10T14:23:53',
        isLiked: false,
        likeCount: 0,
        isReviewed: false,
        sellerNickName: 'hypeboy'
      },
      {
        id: 3,
        mainImageUrl: 'string',
        title: 'string',
        price: 8000,
        tradeArea: '서울시 강남구',
        tradeStatus: {
          code: 4,
          name: '판매중'
        },
        createdDate: '2021-12-10T14:23:53',
        modifiedDate: '2021-12-10T14:23:53',
        isLiked: false,
        likeCount: 0,
        isReviewed: false,
        sellerNickName: 'hypeboy'
      },
      {
        id: 2,
        mainImageUrl: 'string',
        title: 'string',
        price: 36500,
        tradeArea: '서울시 강남구',
        tradeStatus: {
          code: 4,
          name: '판매중'
        },
        createdDate: '2021-12-10T14:25:30',
        modifiedDate: '2021-12-10T14:25:30',
        isLiked: false,
        likeCount: 0,
        isReviewed: false,
        sellerNickName: 'hypeboy'
      },
      {
        id: 1,
        mainImageUrl: 'string',
        title: 'string',
        price: 8000,
        tradeArea: '서울시 강남구',
        tradeStatus: {
          code: 4,
          name: '판매중'
        },
        createdDate: '2021-12-10T14:23:53',
        modifiedDate: '2021-12-10T14:23:53',
        isLiked: false,
        likeCount: 0,
        isReviewed: false,
        sellerNickName: 'hypeboy'
      }
    ],
    pageInfo: {
      currentPageNumber: 1,
      lastPageNumber: 1,
      sizePerPage: 2,
      totalElementCount: 2,
      isFirstPage: true,
      isLastPage: true
    }
  }

  const { checkFilterList, onCheckItem } = useCategoryFilterList(cateGoryList)

  return (
    <div>
      <Layout>
        <ResultWrapper>
          <ResultHeader searchResult="###"></ResultHeader>
          {isDesktop && (
            <CategorySlideFilter
              cateGoryList={checkFilterList}
              onCategoryClick={onCheckItem}
            />
          )}
          <FilterSelect></FilterSelect>
          <ProductList productList={apiRes.elements} />
        </ResultWrapper>
      </Layout>
    </div>
  )
}

const ResultWrapper = styled.div`
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

export default Result
