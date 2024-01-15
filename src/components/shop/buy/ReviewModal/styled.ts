import styled from '@emotion/styled'
import { Modal, Icon, TextArea, Button } from '@offer-ui/react'
import type { StyledReviewStateProps } from './types'

const ReviewModal = styled(Modal)`
  width: 400px;

  ${({ theme }) => theme.mediaQuery.tablet} {
    width: 320px;
  }

  ${({ theme }) => theme.mediaQuery.mobile} {
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
  color: ${({ theme }) => theme.colors.brandPrimary};
  ${({ theme }) => theme.fonts.headline01B};

  ${({ theme }) => theme.mediaQuery.tablet} {
    ${({ theme }) => theme.fonts.headline02B};
  }

  ${({ theme }) => theme.mediaQuery.mobile} {
    ${({ theme }) => theme.fonts.headline02B};
  }
`

const NormalText = styled.span`
  ${({ theme }) => theme.fonts.headline01B};
  ${({ theme }) => theme.mediaQuery.tablet} {
    ${({ theme }) => theme.fonts.headline02B};
  }
  ${({ theme }) => theme.mediaQuery.mobile} {
    ${({ theme }) => theme.fonts.headline02B};
  }
`

const ProductText = styled.div`
  margin-top: 8px;

  color: ${({ theme }) => theme.colors.grayScale70};
  ${({ theme }) => theme.fonts.body01R};

  ${({ theme }) => theme.mediaQuery.tablet} {
    ${({ theme }) => theme.fonts.body02R};
  }

  ${({ theme }) => theme.mediaQuery.mobile} {
    ${({ theme }) => theme.fonts.body02R};
  }
`

const ReviewIconContainer = styled.div`
  display: flex;
  gap: 36px;
  justify-content: center;
  justify-items: center;

  margin: 32px 0;

  cursor: pointer;

  ${({ theme }) => theme.mediaQuery.tablet} {
    gap: 32px;

    margin: 24px 0;
  }

  ${({ theme }) => theme.mediaQuery.mobile} {
    gap: 32px;

    margin: 24px 0;
  }
`

const ReviewState = styled.button<StyledReviewStateProps>`
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 4px;

  border: none;

  background: none;

  cursor: pointer;
  place-items: center center;

  * {
    color: ${({ isFill, theme }) =>
      isFill ? theme.colors.brandPrimary : theme.colors.grayScale30};
    ${({ theme }) => theme.fonts.body01M};
  }
`

const ReviewIcon = styled(Icon)`
  width: 40px;
  height: 40px;

  cursor: pointer;
`

const ReadModeReviewContent = styled.div`
  width: 100%;
  height: 120px;
  padding: 10px 12px;

  background: ${({ theme }) => theme.colors.bgGray02};
  ${({ theme }) => theme.fonts.body02M};
`

const ReviewTextArea = styled(TextArea)`
  width: 100%;
  min-width: 0;
`

const ReviewSendButton = styled(Button)`
  height: 64px;
  margin-top: 40px;
  ${({ theme }) => theme.mediaQuery.tablet} {
    height: 48px;
  }

  ${({ theme }) => theme.mediaQuery.mobile} {
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
