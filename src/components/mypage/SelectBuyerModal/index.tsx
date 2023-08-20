import { IconButton, Divider, Avatar } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type { SelectBuyerModalProps } from './types'
import { toLocaleCurrency } from '@utils'

export const SelectBuyerModal = ({
  productName,
  buyers,
  handleClickReviewButton,
  ...props
}: SelectBuyerModalProps): ReactElement => {
  const [selectedBuyerId, setSelectedBuyerId] = useState<number>(0)

  return (
    <Styled.SelectBuyerModal isOpen {...props}>
      <Styled.Header>
        <Styled.CloseIconWrapper>
          <IconButton color="grayScale30" icon="close" size={24} />
        </Styled.CloseIconWrapper>
        <p>구매자를 선택해 주세요!</p>
        <p>{productName}</p>
      </Styled.Header>
      <Divider />
      <Styled.Body>
        {buyers.map(
          ({
            id,
            avatarSrc,
            nickname,
            latestMessage,
            offerPrice,
            offerTime
          }) => (
            <Styled.BuyerContainer
              key={id}
              isSelected={selectedBuyerId === id}
              onClick={(): void => {
                setSelectedBuyerId(id)
              }}>
              <Styled.AvatarWrapper>
                <Avatar
                  alt="buyer-profile"
                  size="small"
                  src={avatarSrc || ''}
                />
              </Styled.AvatarWrapper>
              <Styled.OfferInfo>
                <div>
                  <Styled.BuyerInfo>
                    <span>{nickname}</span>
                    <span>{offerTime}</span>
                  </Styled.BuyerInfo>
                  <Styled.LatestMessage>{latestMessage}</Styled.LatestMessage>
                </div>
                <Styled.OfferPrice>
                  {toLocaleCurrency(offerPrice)}
                  <span>원</span>
                </Styled.OfferPrice>
              </Styled.OfferInfo>
            </Styled.BuyerContainer>
          )
        )}
      </Styled.Body>
      <Divider />
      <Styled.Footer>
        <Styled.SendReviewButton
          disabled={!selectedBuyerId}
          onClick={(): void => {
            handleClickReviewButton?.(selectedBuyerId)
          }}>
          후기 보내기
        </Styled.SendReviewButton>
      </Styled.Footer>
    </Styled.SelectBuyerModal>
  )
}
