import styled from '@emotion/styled'
import { Modal, Icon, TextArea, Button } from '@offer-ui/react'
import type { StyledReviewIconProps } from './types'

const ModalContainer = styled(Modal)`
  width: 400px;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 320px;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    width: 320px;
  }
`

const TitleContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FirstSection = styled.div`
  display: flex;
`

const NickName = styled.div`
  color: ${({ theme }): string => theme.colors.brandPrimary};
  ${({ theme }): string => theme.fonts.headline01B};

  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.headline02B};
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    ${({ theme }): string => theme.fonts.headline02B};
  }
`

const NormalText = styled.span`
  ${({ theme }): string => theme.fonts.headline01B};
  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.headline02B};
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    ${({ theme }): string => theme.fonts.headline02B};
  }
`

const ProductText = styled.div`
  margin-top: 8px;
  color: ${({ theme }): string => theme.colors.grayScale70};
  ${({ theme }): string => theme.fonts.body01R};

  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.body02R};
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    ${({ theme }): string => theme.fonts.body02R};
  }
`

const ReviewIconContainer = styled.div`
  display: flex;
  justify-items: center;
  gap: 36px;
  justify-content: center;
  margin: 32px 0 32px 0;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    gap: 32px;
    margin: 24px 0 24px 0;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    gap: 32px;
    margin: 24px 0 24px 0;
  }
`

const ReviewState = styled.button`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 4px;
  border: none;
  background: none;
  z-index: 10;
`

const ReviewText = styled.div<StyledReviewIconProps>`
  color: ${({ isFill, theme }): string =>
    isFill ? theme.colors.brandPrimary : theme.colors.grayScale30};
  ${({ theme }): string => theme.fonts.body01M};
`

const ReviewIcon = styled(Icon)<StyledReviewIconProps>`
  width: 40px;
  height: 40px;
  color: ${({ isFill, theme }): string =>
    isFill ? theme.colors.brandPrimary : theme.colors.grayScale30};
`
const GoodIcon = styled(Icon)<StyledReviewIconProps>`
  width: 40px;
  height: 40px;
  color: ${({ isFill, theme }): string =>
    isFill ? theme.colors.brandPrimary : theme.colors.grayScale30};
  path {
    stroke-width: 1.2;
  }
`

const ReviewTextArea = styled(TextArea)`
  width: 100%;
  min-width: 0;
`
const ReviewSendButton = styled(Button)`
  margin-top: 40px;
  height: 64px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    height: 48px;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    height: 48px;
  }
`

export const Styled = {
  ModalContainer,
  TitleContainer,
  FirstSection,
  NickName,
  NormalText,
  ProductText,
  ReviewIconContainer,
  ReviewState,
  ReviewText,
  ReviewIcon,
  GoodIcon,
  ReviewTextArea,
  ReviewSendButton
}
