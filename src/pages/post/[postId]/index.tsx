import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Carousel, Divider, Text, IconButton, SelectBox } from '@offer-ui/react'
import type { ReactElement } from 'react'
import type { Offer } from '@components/post/PriceOfferCard/types'
import { PostField, UserProfile, PriceOfferCard } from '@components'

const IMAGES_MOCK = [
  {
    id: 1,
    url: 'https://picsum.photos/200/300'
  },
  {
    id: 2,
    url: 'https://picsum.photos/200/300'
  },
  {
    id: 3,
    url: 'https://picsum.photos/200/300'
  },
  {
    id: 4,
    url: 'https://picsum.photos/200/300'
  },
  {
    id: 5,
    url: 'https://picsum.photos/200/300'
  }
]

const OFFERS_MOCK: Offer[] = [
  {
    id: 23,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 22343,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 2223433,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 224323,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 215913,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 217813,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 210913,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 215613,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 211473,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 2187913,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 214513,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 215613,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 277113,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  },
  {
    id: 21138,
    name: '신효정',
    level: 23,
    tradeArea: '시당구 동작동',
    date: '1시간 전',
    offerPrice: 234233,
    profileUrl: '',
    tradeMethod: 'all'
  }
]
const CATEGORIES_MOCK = [
  { label: '작성일', value: '1시간 전' },
  { label: '상품 상태', value: '새상품' },
  { label: '거래 방식', value: '직거래' },
  { label: '거래 지역', value: '동작구 사당동' }
]
const PRODUCT_MOCK = {
  id: 2,
  author: {
    id: 1,
    email: 'shinyojeong@naver.com',
    offerLevel: 1,
    nickname: '효정',
    profileImageUrl: 'https://picsum.photos/200/300',
    address: '서울시 고백구 행복동'
  },
  title: '제목입니다.',
  content:
    '인텔리전스랩스는 다양한 게임 정보를 활용해 ‘빅데이터’, ‘머신러닝·딥러닝’, ‘인공지능(AI)’ 기술과 공학적 사고를 통해 솔루션을 만들고 게임 사용자와 넥슨 구성원이 사용할 서비스를 제공하는 조직입니다. * UI/UX 디자이너는 인텔리전스랩스 UX실에 소속되어 유저 인사이트 기반으로 서비스가 성장하도록 돕습니다.',
  category: {
    code: 7,
    name: '유아도서'
  },
  tradeStatus: {
    code: 4,
    name: '판매중'
  },
  tradeArea: '서울시 강남구',
  productCondition: {
    code: 2,
    name: '새상품'
  },
  tradeMethod: {
    code: 4,
    name: '택배거래'
  },
  quantity: 5,
  price: 36500,
  mainImageUrl: 'https://picsum.photos/200/300',
  createdDate: '2021-12-10T15:01:30',
  modifiedDate: '2021-12-10T15:01:30',
  likeCount: 0,
  viewCount: 1,
  isLiked: false
}

const PostDetailPage = (): ReactElement => {
  return (
    <Layout>
      <Main>
        <div>
          <Carousel images={IMAGES_MOCK} isArrow name="product" />
        </div>
        <Content>
          <div>
            <ProductCondition>
              <ProductConditionSelectBox
                items={[
                  { code: 1, name: '판매중' },
                  { code: 2, name: '거래 완료' }
                ]}
                value={1}
                onChange={(): void => {
                  // do something
                }}
              />
              <IconButton icon="more" size={24} />
            </ProductCondition>
            <Text color="grayScale70" styleType="body02M" tag="p">
              카테고리
            </Text>
            <PostName styleType="headline01B" tag="p">
              제품명
            </PostName>
            <Text styleType="display01B" tag="p">
              {PRODUCT_MOCK.price}
              <Text styleType="subtitle01M">원</Text>
            </Text>
          </div>
          <Divider gap={16} />
          <div>
            <Text styleType="headline02B">상품 정보</Text>
            <TransactionContainer>
              {CATEGORIES_MOCK.map(({ label, value }) => (
                <PostField key={label} label={label} value={value} />
              ))}
            </TransactionContainer>
            <Description>{PRODUCT_MOCK.title}</Description>
          </div>
          <Divider gap={16} />
          <UserProfile
            image={PRODUCT_MOCK.author.profileImageUrl}
            level={1}
            location={PRODUCT_MOCK.author.address}
            nickName={PRODUCT_MOCK.author.nickname}
            type="basic"
          />
        </Content>
      </Main>
      <MainDivider size="bold" />
      <PriceOfferCard isLike={false} likeCount={3} offerList={OFFERS_MOCK} />
    </Layout>
  )
}

const ProductCondition = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Layout = styled.div`
  display: flex;
  gap: 35px;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto 15px;
  padding-top: 20px;

  ${({ theme }): SerializedStyles => css`
    ${theme.mediaQuery.tablet} {
      flex-direction: column;
      gap: 0;

      margin: 0;
      padding-top: 0;
    }

    ${theme.mediaQuery.mobile} {
      flex-direction: column;
      gap: 0;

      margin: 0;
      padding-top: 0;
    }
  `}
`
const MainDivider = styled(Divider)`
  display: none;

  ${({ theme }): SerializedStyles => css`
    ${theme.mediaQuery.tablet} {
      display: block;

      margin: 22px 0 16px;
    }
    ${theme.mediaQuery.mobile} {
      display: block;

      margin: 14px 0 20px;
    }
  `}
`
const Main = styled.div`
  ${({ theme }): SerializedStyles => css`
    ${theme.mediaQuery.tablet} {
      margin: 0;
    }
    ${theme.mediaQuery.mobile} {
      margin: 0;
    }
  `}
`

const Content = styled.div`
  ${({ theme }): SerializedStyles => css`
    ${theme.mediaQuery.tablet} {
      padding: 0 24px;
    }
    ${theme.mediaQuery.mobile} {
      padding: 0 16px;
    }
  `}
`

const ProductConditionSelectBox = styled(SelectBox)`
  margin: 33px 0 16px;

  ${({ theme }): SerializedStyles => css`
    ${theme.mediaQuery.tablet} {
      margin: 20px 0;
    }
    ${theme.mediaQuery.mobile} {
      margin: 20px 0;
    }
  `}
`
const TransactionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 24px 0;

  ${({ theme }): SerializedStyles => css`
    ${theme.mediaQuery.tablet} {
      display: grid;
      grid-template-columns: 152px 152px;
      row-gap: 20px;

      width: 316px;
      margin: 20px 0 24px;

      column-gap: 12px;
    }
    ${theme.mediaQuery.mobile} {
      display: grid;
      grid-template-columns: 152px 152px;
      row-gap: 20px;

      width: 316px;
      margin: 24px 0;

      column-gap: 12px;
    }
  `}
`
const PostName = styled(Text)`
  margin: 4px 0 8px;

  ${({ theme }): SerializedStyles => css`
    ${theme.mediaQuery.tablet} {
      margin: 2px 0 8px;
    }
    ${theme.mediaQuery.mobile} {
      margin: 2px 0 8px;
    }
  `}
`

const Description = styled.p`
  margin-bottom: 4px;

  ${({ theme }) => theme.fonts.body02R}
`

export default PostDetailPage
