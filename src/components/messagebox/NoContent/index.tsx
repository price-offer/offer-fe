import { Image } from '@offer-ui/react'
import { Styled } from './styled'
import type { NoContentProps } from './types'

export const NoContent = ({
  image,
  color = 'grayScale50',
  message,
  hasContent = false,
  children
}: NoContentProps) => {
  return hasContent ? (
    <>{children}</>
  ) : (
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
