import { Divider, SelectBox, Text, Icon } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { Styled } from './styled'
import type { PriceOfferCardProps } from './types'
import { PriceOfferModal } from '../PriceOfferModal'
import type { OfferForm } from '../PriceOfferModal/types'
import { UserProfile } from '../UserProfile'
import { getTimeDiffText, toLocaleCurrency } from '@utils/format'
import {
  useUpdateLikeStatusMutation,
  useGetPostQuery,
  useGetPostOffersQuery,
  useCreateOfferMutation
} from '@apis'
import { SORT_OPTIONS } from '@constants'
import { useModal } from '@hooks'
import type { SortOption, SortOptionCodes } from '@types'

const PriceOfferCard = ({
  postId,
  isSeller
}: PriceOfferCardProps): ReactElement => {
  const [sortOptionCode, setSortOptionCode] = useState<SortOptionCodes>(
    SORT_OPTIONS[0].code
  )
  const offerModal = useModal()
  const [likePost, setLikePost] = useState({
    status: false,
    count: 0
  })

  const postOffersQuery = useGetPostOffersQuery({
    postId,
    sort: sortOptionCode
  })
  const postQuery = useGetPostQuery(postId)
  const likeStatusMutation = useUpdateLikeStatusMutation()
  const offerMutation = useCreateOfferMutation()

  useEffect(() => {
    setLikePost({
      status: Boolean(postQuery.data?.liked),
      count: postQuery.data?.totalLikeCount || 0
    })
  }, [postQuery])

  const offers =
    postOffersQuery.data?.offers.map(({ offerer, createdAt, ...offer }) => ({
      ...offerer,
      level: Number(offerer.level),
      date: createdAt,
      ...offer
    })) || []
  const offerCount = offers.length
  const hasOffer = Boolean(offerCount)

  const handleChangeSortOption = ({ code }: SortOption) => {
    setSortOptionCode(code)
  }

  const handleClickLike = async () => {
    setLikePost(({ status, count }) => ({
      status: !status,
      count: status ? count - 1 : count + 1
    }))

    await likeStatusMutation.mutateAsync(postId)
  }

  const handleClickOffer = async ({
    price,
    tradeType,
    tradeArea
  }: OfferForm) => {
    const offerInfo = {
      postId,
      // TODO: post 보내기 merge 후 number로 변환하는 유틸 적용
      price: Number(price) ?? 0,
      tradeType: tradeType ?? '',
      location: `${tradeArea?.city} ${tradeArea?.county} ${tradeArea?.town}`
    }

    offerModal.closeModal()

    await offerMutation.mutateAsync(offerInfo)
    postOffersQuery.refetch()
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
              items={SORT_OPTIONS}
              value={sortOptionCode}
              onChange={handleChangeSortOption}
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
                      date={getTimeDiffText(date)}
                      image={profileImageUrl}
                      level={level}
                      location={location}
                      nickName={nickname}
                      tradeType={tradeType}
                      type="offer"
                    />
                    <Text styleType="body01B">{toLocaleCurrency(price)}원</Text>
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
            {likePost.status ? (
              <Icon color="brandPrimary" type="heartFill" />
            ) : (
              <Icon color="grayScale90" type="heart" />
            )}
            <Text styleType="body01B">{likePost.count}</Text>
          </Styled.LikeButton>
          {isSeller ? (
            <Styled.MessageButton
              disabled={!postOffersQuery.data?.totalSize}
              size="large">
              쪽지하기
            </Styled.MessageButton>
          ) : (
            <Styled.MessageButton
              disabled={
                postOffersQuery.data?.offerCountOfCurrentMember ===
                postOffersQuery.data?.maximumOfferCount
              }
              size="large"
              onClick={() => {
                offerModal.openModal()
              }}>{`가격 제안하기(${
              postOffersQuery.data?.offerCountOfCurrentMember || 0
            }/2)`}</Styled.MessageButton>
          )}
        </Styled.CardFooter>
      </Styled.OfferPriceCardWrapper>
      <PriceOfferModal
        isOpen={offerModal.isOpen}
        onClickOffer={handleClickOffer}
        onClose={offerModal.closeModal}
      />
    </>
  )
}

export { PriceOfferCard, PriceOfferCardProps }
