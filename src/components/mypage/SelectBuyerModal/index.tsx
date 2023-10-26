import { IconButton, Divider, Avatar, Radio } from '@offer-ui/react'
import type { ChangeEvent, ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type { SelectBuyerModalProps } from './types'
import { toLocaleCurrency } from '@utils'

export const SelectBuyerModal = ({
  productName,
  buyers,
  onClickReviewButton,
  ...props
}: SelectBuyerModalProps): ReactElement => {
  const [selectedBuyerId, setSelectedBuyerId] = useState(0)

  const handleChangeRadio = (e: ChangeEvent<HTMLFormElement>) => {
    setSelectedBuyerId(Number(e.target.value))
  }

  return (
    <Styled.SelectBuyerModal {...props}>
      <Styled.Header>
        <Styled.CloseIconWrapper>
          <IconButton color="grayScale30" icon="close" size={24} />
        </Styled.CloseIconWrapper>
        <p>구매자를 선택해 주세요!</p>
        <p>{productName}</p>
      </Styled.Header>
      <Divider />
      <Styled.Body
        direction="vertical"
        formName="buyer"
        onChange={handleChangeRadio}>
        {buyers.map(
          ({
            id,
            avatarSrc,
            nickname,
            latestMessage,
            offerPrice,
            offerTime
          }) => (
            <Styled.BuyerContainer key={id} isSelected={selectedBuyerId === id}>
              <Radio.Input formName="buyer" value={`${id}`} />
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
                    <Styled.Nickname>{nickname}</Styled.Nickname>
                    <Styled.OfferTime>{offerTime}</Styled.OfferTime>
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
            onClickReviewButton?.(selectedBuyerId)
          }}>
          후기 보내기
        </Styled.SendReviewButton>
      </Styled.Footer>
    </Styled.SelectBuyerModal>
  )
}
