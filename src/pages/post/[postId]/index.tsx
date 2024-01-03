import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import { Carousel, Divider, Text, IconButton, SelectBox } from '@offer-ui/react'
import type { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useState, type ReactElement, useEffect } from 'react'
import { getTimeDiffText, toLocaleCurrency, toQueryString } from '@utils/format'
import { useGetPostQuery, useUpdateTradeStatusMutation } from '@apis'
import { UserProfile, PriceOfferCard, PostFieldList, Dialog } from '@components'
import { TRADE_STATUS } from '@constants'
import { useAuth } from '@hooks'
import type { TradeStatusCodes, TradeStatusType } from '@types'

type Props = { postId: number }
export const getServerSideProps: GetServerSideProps<Props> = async ({
  query
}) => ({
  props: {
    postId: Number(query.postId)
  }
})

const PostDetailPage = ({ postId }: Props): ReactElement => {
  const postQuery = useGetPostQuery(postId)
  const tradeStatusMutation = useUpdateTradeStatusMutation(postId)
  const [tradeStatus, setTradeStatus] = useState<TradeStatusCodes>()
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const { user } = useAuth()

  const isSeller = user.id === postQuery.data?.seller.id
  const postImages = postQuery.data?.imageUrls.map((url, idx) => ({
    id: idx,
    url
  }))

  const handleChangeTradeStatus = async (status: TradeStatusType) => {
    const nextStatusCode = status.code

    setTradeStatus(nextStatusCode)

    await tradeStatusMutation.mutateAsync({
      tradeStatus: nextStatusCode
    })
  }

  const handleCloseDialog = () => {
    setIsOpenDialog(false)
  }

  const handleClickMore = () => {
    setIsOpenDialog(true)
  }

  useEffect(() => {
    if (postQuery.data) {
      setTradeStatus(postQuery.data.tradeStatus.code)
    }
  }, [postQuery.data])

  return (
    <Layout>
      <Main>
        <div>
          <Carousel images={postImages || []} isArrow name="post-carousel" />
        </div>
        <Content>
          <div>
            <ProductCondition>
              {isSeller ? (
                <>
                  <ProductConditionSelectBox
                    colorType="dark"
                    items={TRADE_STATUS}
                    value={tradeStatus}
                    onChange={handleChangeTradeStatus}
                  />
                  <MoreButtonWrapper>
                    <IconButton
                      icon="more"
                      size={24}
                      onClick={handleClickMore}
                    />
                    {isOpenDialog && (
                      <Dialog
                        dialogPositionStyle={{
                          top: '34px',
                          right: '0'
                        }}
                        onClose={handleCloseDialog}>
                        <DialogButtonContainer>
                          <Link
                            href={`/post${toQueryString({
                              postId
                            })}`}>
                            <DialogButton>수정하기</DialogButton>
                          </Link>
                          <DialogButton>삭제하기</DialogButton>
                        </DialogButtonContainer>
                      </Dialog>
                    )}
                  </MoreButtonWrapper>
                </>
              ) : (
                <ProductConditionBadge>
                  {postQuery.data?.tradeStatus.code}
                </ProductConditionBadge>
              )}
            </ProductCondition>
            <Text color="grayScale70" styleType="body02M" tag="p">
              {postQuery.data?.category.name || ''}
            </Text>
            <PostName styleType="headline01B" tag="p">
              {postQuery.data?.title || ''}
            </PostName>
            <Text styleType="display01B" tag="p">
              {toLocaleCurrency(Number(postQuery.data?.price))}
              <Text styleType="subtitle01M">원</Text>
            </Text>
          </div>
          <Divider gap={16} />
          <div>
            <Text styleType="headline02B">상품 정보</Text>
            <TransactionContainer>
              <PostFieldList
                date={getTimeDiffText(postQuery.data?.createdAt || '')}
                location={postQuery.data?.location || ''}
                productCondition={postQuery.data?.productCondition.name}
                tradeType={postQuery.data?.tradeType.name}
              />
            </TransactionContainer>
            <Description>{postQuery.data?.description}</Description>
          </div>
          <Divider gap={16} />
          <UserProfile
            image={postQuery.data?.seller.profileImageUrl}
            level={postQuery.data?.seller.offerLevel || 0}
            location={postQuery.data?.seller.nickname || ''}
            nickName={postQuery.data?.seller.nickname || ''}
            type="basic"
          />
        </Content>
      </Main>
      <MainDivider size="bold" />
      <PriceOfferCard isSeller={isSeller} postId={postId} />
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

const MoreButtonWrapper = styled.div`
  position: relative;
`

const DialogButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
`

const DialogButton = styled.button`
  width: 100%;
  padding: 4px 0;
  border: none;

  background-color: transparent;

  text-align: left;

  cursor: pointer;
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
  padding: 4px 8px 3px;

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
