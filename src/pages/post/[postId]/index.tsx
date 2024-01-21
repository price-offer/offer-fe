import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'
import {
  Carousel,
  Divider,
  Text,
  IconButton,
  SelectBox,
  Button,
  ImageModal
} from '@offer-ui/react'
import type { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import type { ReactElement } from 'react'
import { getTimeDiffText, toLocaleCurrency, toQueryString } from '@utils/format'
import {
  useDeletePostMutation,
  useGetPostQuery,
  useUpdateTradeStatusMutation
} from '@apis'
import {
  UserProfile,
  PriceOfferCard,
  PostFieldList,
  Dialog,
  CommonModal
} from '@components'
import { TRADE_STATUS } from '@constants'
import { useAuth, useModal } from '@hooks'
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
  const getPostQuery = useGetPostQuery(postId)
  const updateTradeStatusMutation = useUpdateTradeStatusMutation()
  const deletePostMutation = useDeletePostMutation(postId)

  const [tradeStatus, setTradeStatus] = useState<TradeStatusCodes>()
  const router = useRouter()

  const tradeStatusDialog = useModal()
  const deleteModal = useModal()
  const { user } = useAuth()
  const imageModal = useModal()

  const isSeller = user.id === getPostQuery.data?.seller.id
  const postImages = getPostQuery.data?.postImages || []

  const handleChangeTradeStatus = async (status: TradeStatusType) => {
    const nextStatusCode = status.code

    setTradeStatus(nextStatusCode)

    await updateTradeStatusMutation.mutateAsync({
      postId,
      tradeStatus: nextStatusCode
    })
  }

  const handleClickDelete = async () => {
    await deletePostMutation.mutateAsync()

    router.replace('/')
  }

  return (
    <>
      <Layout>
        <Main>
          <div onClick={imageModal.openModal}>
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
                      value={tradeStatus || getPostQuery.data?.tradeStatus.code}
                      onChange={handleChangeTradeStatus}
                    />
                    <MoreButtonWrapper>
                      <IconButton
                        icon="more"
                        size={24}
                        onClick={tradeStatusDialog.openModal}
                      />
                      {tradeStatusDialog.isOpen && (
                        <Dialog
                          dialogPositionStyle={{
                            top: '34px',
                            right: '0'
                          }}
                          onClose={tradeStatusDialog.closeModal}>
                          <DialogButtonContainer>
                            <Link
                              href={`/post${toQueryString({
                                type: 'edit',
                                postId
                              })}`}>
                              <DialogButton>수정하기</DialogButton>
                            </Link>
                            <DialogButton onClick={deleteModal.openModal}>
                              삭제하기
                            </DialogButton>
                          </DialogButtonContainer>
                        </Dialog>
                      )}
                    </MoreButtonWrapper>
                  </>
                ) : (
                  <ProductConditionBadge>
                    {getPostQuery.data?.tradeStatus.name}
                  </ProductConditionBadge>
                )}
              </ProductCondition>
              <Text color="grayScale70" styleType="body02M" tag="p">
                {getPostQuery.data?.category.name || ''}
              </Text>
              <PostName styleType="headline01B" tag="p">
                {getPostQuery.data?.title || ''}
              </PostName>
              <Text styleType="display01B" tag="p">
                {toLocaleCurrency(Number(getPostQuery.data?.price))}
                <Text styleType="subtitle01M">원</Text>
              </Text>
            </div>
            <Divider gap={16} />
            <div>
              <Text styleType="headline02B">상품 정보</Text>
              <TransactionContainer>
                <PostFieldList
                  date={getTimeDiffText(getPostQuery.data?.createdAt || '')}
                  location={getPostQuery.data?.location || ''}
                  productCondition={getPostQuery.data?.productCondition.name}
                  tradeType={getPostQuery.data?.tradeType.name}
                />
              </TransactionContainer>
              <Description>{getPostQuery.data?.description}</Description>
            </div>
            <Divider gap={16} />
            <UserProfile
              image={getPostQuery.data?.seller.profileImageUrl}
              level={getPostQuery.data?.seller.offerLevel || 0}
              location={getPostQuery.data?.seller.nickname || ''}
              nickName={getPostQuery.data?.seller.nickname || ''}
              type="basic"
            />
          </Content>
        </Main>
        <MainDivider size="bold" />
        <PriceOfferCard isSeller={isSeller} postId={postId} />
      </Layout>
      <ImageModal
        images={postImages}
        isOpen={imageModal.isOpen}
        name="post-detail"
        onClose={imageModal.closeModal}
      />
      <CommonModal
        buttons={[
          <Button key="delete" size="large" onClick={handleClickDelete}>
            삭제
          </Button>,
          <Button
            key="cancel"
            size="large"
            styleType="ghost"
            onClick={deleteModal.closeModal}>
            취소
          </Button>
        ]}
        description="삭제한 게시글은 복구할 수 없어요."
        isOpen={deleteModal.isOpen}
        title="게시글을 삭제하시겠어요?"
        onClose={deleteModal.closeModal}
      />
    </>
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
  width: 100%;

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
  `}
`

const ProductConditionBadge = styled.div`
  margin: 33px 0 16px;
  padding: 4px 8px 3px;

  ${({ theme }) => css`
    border-radius: ${theme.radius.round4};

    background-color: ${theme.colors.black};

    color: ${theme.colors.white};

    ${theme.fonts.body02B}

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
