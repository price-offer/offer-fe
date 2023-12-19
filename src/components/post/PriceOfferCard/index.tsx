import { Divider, SelectBox, Text, Icon } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type { PriceOfferCardProps } from './types'
import { PriceOfferModal } from '../PriceOfferModal'
import { UserProfile } from '../UserProfile'
import { usePutPostLikeMutation } from '@apis/like'
import { useGetPostOffersQuery } from '@apis/offer'
import { useModal } from '@hooks'

const PriceOfferCard = ({
  postId,
  isAuthor
}: PriceOfferCardProps): ReactElement => {
  const postOffersQuery = useGetPostOffersQuery(postId)
  const postLikeMutation = usePutPostLikeMutation()
  const {
    isOpen: isOfferModalOpen,
    openModal: openOfferModal,
    closeModal: closeOfferModal
  } = useModal()
  const [likePost, setLikePost] = useState({
    status: false,
    count: 0
  })
  const offers =
    postOffersQuery.data?.offers.map(({ id, offerer, createdAt, price }) => ({
      ...offerer,
      level: Number(offerer.level),
      id,
      date: createdAt,
      price
    })) || []
  const offerCount = offers.length
  const hasOffer = Boolean(offerCount)

  const handleClickLike = async () => {
    setLikePost(({ status, count }) => ({
      status: !status,
      count: status ? count - 1 : count + 1
    }))

    await postLikeMutation.mutateAsync(postId)
  }

  return (
    <>
      <Styled.OfferPriceCardWrapper>
        <Styled.CardHeader>
          <Styled.CardTitle>
            <Styled.OfferTitle styleType="headline02B">
              가격제안
            </Styled.OfferTitle>
            {hasOffer && (
              <Text color="grayScale50" styleType="headline02B">
                {offerCount}
              </Text>
            )}
          </Styled.CardTitle>
          {hasOffer && (
            <SelectBox
              items={[
                { code: 1, name: '최신순' },
                { code: 2, name: '높은 가격순' }
              ]}
              value={2}
              onChange={(): void => {
                // do something
              }}
            />
          )}
        </Styled.CardHeader>
        <Styled.Divider />
        {hasOffer ? (
          <Styled.CardBody>
            <Styled.OfferListBox>
              {offers.map(
                ({
                  id,
                  nickname,
                  level,
                  location,
                  date,
                  profileImageUrl,
                  tradeType,
                  price
                }) => (
                  <Styled.Offer key={id}>
                    <UserProfile
                      date={date}
                      image={profileImageUrl}
                      level={level}
                      location={location}
                      nickName={nickname}
                      tradeType={tradeType}
                      type="offer"
                    />
                    <Text styleType="body01B">{price}원</Text>
                  </Styled.Offer>
                )
              )}
            </Styled.OfferListBox>
          </Styled.CardBody>
        ) : (
          <Styled.BlankCard>
            <Text color="grayScale70" styleType="subtitle01M">
              아직 제안된 가격이 없어요.
            </Text>
          </Styled.BlankCard>
        )}
        <Divider />
        <Styled.CardFooter>
          <Styled.LikeButton role="button" onClick={handleClickLike}>
            {/* TODO: Icon outline에 색상 넣을 수 있도록 수정 후 반영 */}
            {likePost.status ? (
              <Icon color="brandPrimary" type="heartFill" />
            ) : (
              <Icon fill="grayScale90" type="heartFill" />
            )}
            <Text styleType="body01B">{likePost.count}</Text>
          </Styled.LikeButton>
          {isAuthor ? (
            <Styled.MessageButton size="large">쪽지하기</Styled.MessageButton>
          ) : (
            <Styled.MessageButton
              size="large"
              onClick={() => {
                openOfferModal()
              }}>{`가격 제안하기(${
              postOffersQuery.data?.offerCountOfCurrentMember || 0
            }/2)`}</Styled.MessageButton>
          )}
        </Styled.CardFooter>
      </Styled.OfferPriceCardWrapper>
      <PriceOfferModal isOpen={isOfferModalOpen} onClose={closeOfferModal} />
    </>
  )
}

export { PriceOfferCard, PriceOfferCardProps }
