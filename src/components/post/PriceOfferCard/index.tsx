import { Divider, SelectBox, Text, Icon, Radio } from '@offer-ui/react'
import { useRouter } from 'next/router'
import type { ChangeEvent, ReactElement } from 'react'
import { useEffect, useState } from 'react'
import { Styled } from './styled'
import type { PriceOfferCardProps } from './types'
import { PriceOfferModal } from '../PriceOfferModal'
import type { OfferForm } from '../PriceOfferModal/types'
import { UserProfile } from '../UserProfile'
import {
  getTimeDiffText,
  localeCurrencyToNumber,
  toLocaleCurrency,
  toQueryString
} from '@utils/format'
import {
  useUpdateLikeStatusMutation,
  useGetPostQuery,
  useGetPostOffersQuery,
  useCreateOfferMutation,
  useCreateMessageRoomMutation
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
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null)
  const [likePost, setLikePost] = useState({
    status: false,
    count: 0
  })

  const router = useRouter()
  const offerModal = useModal()

  const getPostOffersQuery = useGetPostOffersQuery({
    postId,
    sort: sortOptionCode
  })
  const getPostQuery = useGetPostQuery(postId)
  const createMessageRoomMutation = useCreateMessageRoomMutation()
  const updateLikeStatusMutation = useUpdateLikeStatusMutation()
  const createOfferMutation = useCreateOfferMutation()

  useEffect(() => {
    setLikePost({
      status: Boolean(getPostQuery.data?.liked),
      count: getPostQuery.data?.totalLikeCount || 0
    })
  }, [getPostQuery.data])

  const offers =
    getPostOffersQuery.data?.offers.map(({ offerer, createdAt, ...offer }) => ({
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

    await updateLikeStatusMutation.mutateAsync(postId)
  }

  const handleChangeOffer = (e: ChangeEvent<HTMLFormElement>) => {
    const offerId = Number(e.target.value)

    setSelectedOffer(offerId)
  }

  const handleClickOffer = async ({
    price,
    tradeType,
    tradeArea
  }: OfferForm) => {
    const offerInfo = {
      postId,
      price: localeCurrencyToNumber(price || '0'),
      tradeType: tradeType ?? '',
      location: `${tradeArea?.city} ${tradeArea?.county} ${tradeArea?.town}`
    }

    offerModal.closeModal()

    await createOfferMutation.mutateAsync(offerInfo)
    getPostOffersQuery.refetch()
  }

  const handleClickStartMessage = async () => {
    if (selectedOffer) {
      const res = await createMessageRoomMutation.mutateAsync({
        offerId: selectedOffer
      })

      router.push(
        `/messagebox${toQueryString({
          roomId: res.id
        })}`
      )
    }
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
            <Styled.OfferListBox
              direction="vertical"
              formName="offer"
              onChange={handleChangeOffer}>
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
                }) => {
                  const isSelected = selectedOffer === id

                  return (
                    <Styled.Offer key={id} isSelected={isSelected}>
                      <Radio.Input
                        checked={isSelected}
                        formName="offer"
                        value={String(id)}
                      />
                      <Styled.OfferContent>
                        <UserProfile
                          date={getTimeDiffText(date)}
                          image={profileImageUrl}
                          level={level}
                          location={location}
                          nickName={nickname}
                          tradeType={tradeType.name}
                          type="offer"
                        />
                        <Text styleType="body01B">
                          {toLocaleCurrency(price)}원
                        </Text>
                      </Styled.OfferContent>
                    </Styled.Offer>
                  )
                }
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
              disabled={!selectedOffer}
              size="large"
              onClick={handleClickStartMessage}>
              쪽지하기
            </Styled.MessageButton>
          ) : (
            <Styled.MessageButton
              disabled={
                getPostOffersQuery.data?.offerCountOfCurrentMember ===
                getPostOffersQuery.data?.maximumOfferCount
              }
              size="large"
              onClick={() => {
                offerModal.openModal()
              }}>{`가격 제안하기(${
              getPostOffersQuery.data?.offerCountOfCurrentMember || 0
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
