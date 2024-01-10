import { Avatar, Image } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { MessagePreviewProps } from './types'
import { IMAGE } from '@constants'
import { getTimeDiffText, toLocaleCurrency } from '@utils'

export const MessagePreview = ({
  id,
  partner,
  post,
  offerPrice,
  lastContent,
  lastSendTime,
  notReadCnt,
  isSelected = false,
  onClick
}: MessagePreviewProps): ReactElement => {
  const handleClickPreview = () => {
    onClick?.(id)
  }

  return (
    <Styled.Container
      isSelected={isSelected}
      role="button"
      onClick={handleClickPreview}>
      <Styled.AvatarWrapper>
        <Avatar alt="avatar" size="small" src={partner.imageUrl || ''} />
      </Styled.AvatarWrapper>
      <Styled.Content>
        <Styled.Nickname>{partner.nickname}</Styled.Nickname>
        <Styled.Time>{getTimeDiffText(lastSendTime)}</Styled.Time>
        <Styled.LastMessage>{lastContent}</Styled.LastMessage>
      </Styled.Content>
      <Styled.SubContent>
        {notReadCnt && (
          <Styled.AlertWrapper>
            <Styled.Alert>{notReadCnt}</Styled.Alert>
          </Styled.AlertWrapper>
        )}
        <Styled.Price>{`${toLocaleCurrency(offerPrice)}원`}</Styled.Price>
      </Styled.SubContent>
      <Styled.ImageWrapper>
        <Image
          alt="product"
          fallbackSrc={IMAGE.CHECKBOARD}
          height="40px"
          src={post.thumbnailImageUrl || ''}
          width="40px"
        />
      </Styled.ImageWrapper>
    </Styled.Container>
  )
}
