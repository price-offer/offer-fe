import { Divider, ToggleButton, SelectBox, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { UserProfile } from '../UserProfile'
import {
  StyledOfferPriceCardWrapper,
  StyledOfferListBox,
  StyledOfferTitle,
  StyledCardHeader,
  StyledCardTitle,
  StyledDivider,
  StyledBlankCard,
  StyledOffer,
  StyledCardBody,
  StyledCardFooter,
  StyledMessageButton,
  StyledLikeButton
} from './styled'
import type { PriceOfferCardProps } from './types'

export const PriceOfferCard = ({
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
    <StyledOfferPriceCardWrapper>
      <StyledCardHeader>
        <StyledCardTitle>
          <StyledOfferTitle styleType="headline02B">가격제안</StyledOfferTitle>
          {hasOffer && (
            <Text color="grayScale50" styleType="headline02B">
              {offerList.length}
            </Text>
          )}
        </StyledCardTitle>
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
      </StyledCardHeader>
      <StyledDivider />
      {hasOffer ? (
        <StyledCardBody>
          <StyledOfferListBox>
            {offerList.map(
              ({
                id,
                name,
                level,
                tradeArea,
                date,
                profileUrl,
                tradeMethod,
                offerPrice
              }) => (
                <StyledOffer key={id}>
                  <UserProfile
                    date={date}
                    image={profileUrl}
                    level={level}
                    location={tradeArea}
                    nickName={name}
                    transactionType={tradeMethod}
                    type="offer"
                  />
                  <Text styleType="body01B">{offerPrice}원</Text>
                </StyledOffer>
              )
            )}
          </StyledOfferListBox>
        </StyledCardBody>
      ) : (
        <StyledBlankCard>
          <Text color="grayScale70" styleType="subtitle01M">
            아직 제안된 가격이 없어요.
          </Text>
        </StyledBlankCard>
      )}
      <Divider />
      <StyledCardFooter>
        <StyledLikeButton role="button" onClick={handleLikeClick}>
          <ToggleButton
            color="grayScale90"
            icon="heart"
            isToggle={isLikeToggle}
            size={24}
            toggleColor="brandPrimary"
            toggleIcon="heartFill"
          />
          <Text styleType="body01B">{likeCount}</Text>
        </StyledLikeButton>
        <StyledMessageButton size="large">쪽지하기</StyledMessageButton>
      </StyledCardFooter>
    </StyledOfferPriceCardWrapper>
  )
}
