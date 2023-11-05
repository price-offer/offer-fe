import styled from '@emotion/styled'
import { Modal, Icon, TextArea, Button } from '@offer-ui/react'
import type { StyledReviewStateProps } from './types'

const ReviewModal = styled(Modal)`
  width: 400px;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 320px;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    width: 320px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 32px;
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
  gap: 36px;
  justify-content: center;
  justify-items: center;

  margin: 32px 0;

  cursor: pointer;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    gap: 32px;

    margin: 24px 0;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    gap: 32px;

    margin: 24px 0;
  }
`

const ReviewState = styled.button<StyledReviewStateProps>`
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 4px;
  place-items: center center;

  border: none;

  background: none;

  * {
    color: ${({ isFill, theme }): string =>
      isFill ? theme.colors.brandPrimary : theme.colors.grayScale30};
    ${({ theme }): string => theme.fonts.body01M};
  }
`

const ReviewIcon = styled(Icon)`
  width: 40px;
  height: 40px;
`

const ReadModeReviewContent = styled.div`
  width: 100%;
  height: 120px;
  padding: 10px 12px;

  background: ${({ theme }): string => theme.colors.bgGray02};
  ${({ theme }): string => theme.fonts.body02M};
`

const ReviewTextArea = styled(TextArea)`
  width: 100%;
  min-width: 0;
`

const ReviewSendButton = styled(Button)`
  height: 64px;
  margin-top: 40px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    height: 48px;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    height: 48px;
  }
`

export const Styled = {
  ReviewModal,
  TitleContainer,
  FirstSection,
  NickName,
  NormalText,
  ProductText,
  ReviewIconContainer,
  ReviewState,
  ReviewIcon,
  ReviewTextArea,
  ReadModeReviewContent,
  ReviewSendButton
}
