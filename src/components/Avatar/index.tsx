import type { HTMLAttributes, ReactElement } from 'react'
import { ICON } from '@constants'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useState } from 'react'

type AvatarSize = 'lg' | 'md' | 'sm' | 'xs'
interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  size: AvatarSize
  name: string
  cursor?: boolean
  src?: string
}

type StyledAvatarWrapperProps = Pick<AvatarProps, 'cursor' | 'size'>
type ApplyPropsOnAvatar = (size: AvatarSize) => string

export const Avatar = ({
  size = 'sm',
  name,
  cursor = true,
  src = ICON.AVATAR,
  ...props
}: AvatarProps): ReactElement => {
  const [imageSrc, setImageSrc] = useState(src)
  const handleError = (): void => {
    setImageSrc(ICON.AVATAR)
  }

  return (
    <StyledAvatarWrapper cursor={cursor} size={size} {...props}>
      <Image
        alt={name}
        layout="fill"
        src={imageSrc}
        onError={handleError}></Image>
    </StyledAvatarWrapper>
  )
}

const applyPropsOnAvatarWrapper: ApplyPropsOnAvatar = size => {
  switch (size) {
    case 'lg':
      return 'width: 112px; height: 112px;'
    case 'md':
      return 'width: 80px; height: 80px;'
    case 'sm':
      return 'width: 46px; height: 46px;'
    case 'xs':
      return 'width: 32px; height: 32px;'
    default:
      return ''
  }
}

const StyledAvatarWrapper = styled.div<StyledAvatarWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  cursor: ${({ cursor }): string => (cursor ? 'pointer' : 'default')};
  ${({ size }): string => applyPropsOnAvatarWrapper(size)};
  background: ${({ theme }): string => theme.colors.grayScale.gray05};

  /* Next Image Style */
  span {
    position: relative !important;
    width: 50% !important;
    height: 50% !important;
  }
`
