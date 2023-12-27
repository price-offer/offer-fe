import { Divider, ToggleButton, SelectBox, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type { PriceOfferCardProps } from './types'
import { UserProfile } from '../UserProfile'

const PriceOfferCard = ({
  offerList,
  likeCount,
  isLike
}: PriceOfferCardProps): ReactElement => {
  const hasOffer = offerList.length > 0
  const [isLikeToggle, setIsLikeToggle] = useState<boolean>(isLike)

  const handleLikeClick = (): void => {
    setIsLikeToggle(!isLikeToggle)
  }

  return (
    <Styled.OfferPriceCardWrapper>
      <Styled.CardHeader>
        <Styled.CardTitle>
          <Styled.OfferTitle styleType="headline02B">
            가격제안
          </Styled.OfferTitle>
          {hasOffer && (
            <Text color="grayScale50" styleType="headline02B">
              {offerList.length}
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
            {offerList.map(
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
        <Styled.LikeButton role="button" onClick={handleLikeClick}>
          <ToggleButton
            color="grayScale90"
            icon="heart"
            isToggle={isLikeToggle}
            size={24}
            toggleColor="brandPrimary"
            toggleIcon="heartFill"
          />
          <Text styleType="body01B">{likeCount}</Text>
        </Styled.LikeButton>
        <Styled.MessageButton size="large">쪽지하기</Styled.MessageButton>
      </Styled.CardFooter>
    </Styled.OfferPriceCardWrapper>
  )
}

export { PriceOfferCard, PriceOfferCardProps }
