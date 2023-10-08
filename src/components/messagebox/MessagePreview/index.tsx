import { Avatar, Image } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { MessagePreviewProps } from './types'
import { toLocaleCurrency } from '@utils'

export const MessagePreview = ({
  userInfo,
  productInfo,
  latestTalk,
  isSelected,
  onClick
}: MessagePreviewProps): ReactElement => {
  return (
    <Styled.Container isSelected={isSelected} role="button" onClick={onClick}>
      <Styled.AvatarWrapper>
        <Avatar
          alt="avatar"
          size="small"
          src={userInfo.profileImageUrl || ''}
        />
      </Styled.AvatarWrapper>
      <Styled.Content>
        <Styled.Nickname>{userInfo.nickname}</Styled.Nickname>
        <Styled.Time>{latestTalk.createdDate}</Styled.Time>
        <Styled.LastMessage>{latestTalk.content}</Styled.LastMessage>
      </Styled.Content>
      <Styled.SubContent>
        <Styled.AlertWrapper>
          <Styled.Alert>6</Styled.Alert>
        </Styled.AlertWrapper>
        <Styled.Price>{`${toLocaleCurrency(
          productInfo.price
        )}원`}</Styled.Price>
      </Styled.SubContent>
      <Styled.ImageWrapper>
        <Image
          alt="product"
          fallbackSrc="/images/product_fallback.png"
          height="40px"
          src={productInfo.productImageUrl || ''}
          width="40px"
        />
      </Styled.ImageWrapper>
    </Styled.Container>
  )
}
