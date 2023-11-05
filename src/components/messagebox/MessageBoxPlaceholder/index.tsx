import { Image } from '@offer-ui/react'
import { Styled } from './styled'
import type { MessageBoxPlaceholderProps } from './types'

export const MessageBoxPlaceholder = ({
  image,
  color = 'grayScale50',
  message
}: MessageBoxPlaceholderProps) => {
  return (
    <Styled.Container>
      {image && (
        <div>
          <Image
            alt="no-content"
            height={image.height}
            src={image.url}
            width={image.width}
          />
        </div>
      )}
      <Styled.Message color={color}>{message}</Styled.Message>
    </Styled.Container>
  )
}
