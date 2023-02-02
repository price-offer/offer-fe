import styled from '@emotion/styled'
import { Button, Divider, ToggleButton, SelectBox, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { UserProfile } from '../UserProfile'
import type { TRANSACTION_TYPE } from '@constants'

export interface PriceOfferCardProps {
  offerList: Offer[]
  likeCount: number
  isLike: boolean
}
export interface Offer {
  id: number
  name: string
  level: number
  tradeArea: string
  date: string
  offerPrice: number
  profileUrl: string
  tradeMethod: keyof typeof TRANSACTION_TYPE
}

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

const StyledOfferPriceCardWrapper = styled.div`
  ${({ theme }): string => {
    const { colors, radius, mediaQuery } = theme

    return `
        width: 478px;
        min-width: 478px;
        background-color: ${colors.white};
        border: solid 1px ${colors.grayScale10};
        border-radius: ${radius.round6};

        ${mediaQuery.tablet} {
          width: 100%;
          border: none;
          min-width: auto;
         }
         ${mediaQuery.mobile} {
          flex-direction: column;
          min-width: auto;
         }
      `
  }}
`

const StyledOfferListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  overflow: scroll;
`

const StyledOfferTitle = styled(Text)`
  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      ${theme.fonts.subtitle02B};
    }
    ${theme.mediaQuery.mobile} {
      ${theme.fonts.subtitle02B};
    }`}
`

const StyledCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      padding: 0 23px;
    }
    ${theme.mediaQuery.mobile} {
      padding: 0 16px;
    }
  `}
`

const StyledCardTitle = styled.div`
  display: flex;
  gap: 8px;
`

const StyledDivider = styled(Divider)`
  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      display: none;
    }
    ${theme.mediaQuery.mobile} {
      display: none;
    }
  `}
`

const StyledBlankCard = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  align-items: center;
  height: 120px;
`
const StyledOffer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: ${({ theme }): string => `solid 1px ${theme.colors.grayScale10}`};
  border-radius: ${({ theme }): string => theme.border.radius06};

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      padding: 16px;
      border: none;
      border-bottom: solid 1px ${theme.colors.grayScale10};
    }
    ${theme.mediaQuery.mobile} {
      border: none;
      border-bottom: solid 1px ${theme.colors.grayScale10};
    }
  `}
`

const StyledCardBody = styled.div`
  padding: 20px 16px;
  height: 564px;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      padding: 3px 16px;
      max-height: 276px;
    }
    ${theme.mediaQuery.mobile} {
      padding: 16px;
      max-height: 368px;
    }
  `}
`
const StyledCardFooter = styled.div`
  display: flex;
  gap: 8px;
  padding: 20px;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      justify-content: space-between;
      gap: 100px;
      padding: 12px 24px;
    }
    ${theme.mediaQuery.mobile} {
      justify-content: space-between;
      gap: 100px;
      padding: 12px 16px;
    }
  `}
`

const StyledMessageButton = styled(Button)`
  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      width: 100%;
      ${theme.ctaButton.medium}
    }
    ${theme.mediaQuery.mobile} {
      ${theme.ctaButton.medium}
    }
  `}
`
const StyledLikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 96px;
  height: 64px;
  border: ${({ theme }): string => `solid 1px ${theme.colors.grayScale20}`};
  cursor: pointer;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      width: 84px;
      height: 48px;
      border-radius: ${theme.radius.round100};
    }
    ${theme.mediaQuery.mobile} {
      width: 84px;
      height: 48px;
      border-radius: ${theme.radius.round100};
    }
  `}
`
