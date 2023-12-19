import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Carousel, Divider, Text, IconButton, SelectBox } from '@offer-ui/react'
import type { GetServerSideProps } from 'next'
import { useGetPostDetailQuery } from '@apis/post'
import { formatDate, toLocaleCurrency } from '@utils/format'
import { PostField, UserProfile, PriceOfferCard } from '@components'
import {
  PRODUCT_CONDITION_LABEL,
  TRADE_STATUS,
  TRADE_TYPE_LABEL
} from '@constants'

// TODO: api에 작성자 데이터 추가되면 제거
const AUTHOR_MOCK = {
  id: 1,
  email: 'shinyojeong@naver.com',
  offerLevel: 1,
  nickname: '효정',
  profileImageUrl: 'https://picsum.photos/200/300',
  address: '서울시 고백구 행복동'
}
const CATEGORY_MOCK = {
  code: 'ALL',
  name: '전체'
}

type Props = { postId: number }
export const getServerSideProps: GetServerSideProps<Props> = async ({
  query
}) => ({
  props: {
    postId: Number(query.postId)
  }
})

const PostDetailPage = ({ postId }: Props) => {
  const postDetailQuery = useGetPostDetailQuery(postId)

  const isAuthor = false
  const postPrice = toLocaleCurrency(Number(postDetailQuery.data?.price))
  const postImages = postDetailQuery.data?.imageUrls.map((url, idx) => ({
    id: idx,
    url
  }))
  const postInfoList = [
    {
      label: '작성일',
      // TODO: 주영님이 만든 유틸 적용하기
      value: formatDate(postDetailQuery.data?.createdAt || '', 'A H:m')
    },
    {
      label: '상품 상태',
      value:
        PRODUCT_CONDITION_LABEL[postDetailQuery.data?.productCondition || '']
    },
    {
      label: '거래 방식',
      value: TRADE_TYPE_LABEL[postDetailQuery.data?.tradeType || '']
    },
    { label: '거래 지역', value: postDetailQuery.data?.location }
  ]

  return (
    <Layout>
      <Main>
        <div>
          <Carousel images={postImages || []} isArrow name="post-carousel" />
        </div>
        <Content>
          <div>
            <ProductCondition>
              {isAuthor ? (
                <>
                  <ProductConditionSelectBox
                    items={TRADE_STATUS}
                    value={postDetailQuery.data?.tradeStatus}
                    onChange={(): void => {
                      // do something
                    }}
                  />
                  <IconButton icon="more" size={24} />
                </>
              ) : (
                <ProductConditionBadge>
                  {postDetailQuery.data?.tradeStatus}
                </ProductConditionBadge>
              )}
            </ProductCondition>
            <Text color="grayScale70" styleType="body02M" tag="p">
              {CATEGORY_MOCK.name}
            </Text>
            <PostName styleType="headline01B" tag="p">
              {postDetailQuery.data?.title || ''}
            </PostName>
            <Text styleType="display01B" tag="p">
              {postPrice}
              <Text styleType="subtitle01M">원</Text>
            </Text>
          </div>
          <Divider gap={16} />
          <div>
            <Text styleType="headline02B">상품 정보</Text>
            <TransactionContainer>
              {postInfoList.map(({ label, value }) => (
                <PostField key={label} label={label} value={value || ''} />
              ))}
            </TransactionContainer>
            <Description>{postDetailQuery.data?.description}</Description>
          </div>
          <Divider gap={16} />
          <UserProfile
            image={AUTHOR_MOCK.profileImageUrl}
            level={AUTHOR_MOCK.offerLevel}
            location={AUTHOR_MOCK.address}
            nickName={AUTHOR_MOCK.nickname}
            type="basic"
          />
        </Content>
      </Main>
      <MainDivider size="bold" />
      <PriceOfferCard postId={postId} />
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
  height: fit-content;
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

const ProductConditionBadge = styled.div`
  margin-bottom: 20px;
  padding: 4px 8px;

  ${({ theme }) => css`
    border-radius: ${theme.radius.round4};

    background-color: ${theme.colors.black};

    color: ${theme.colors.white};

    ${theme.fonts.body02B}
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
