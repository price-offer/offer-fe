import styled from '@emotion/styled'
import { Modal, Icon, Button } from '@offer-ui/react'

const ModalContainer = styled(Modal)`
  width: 400px;

  ${({ theme }): string => theme.mediaQuery.tablet} {
    width: 320px;
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    width: 320px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  margin-top: 36px;
  color: ${({ theme }): string => theme.colors.black};
  ${({ theme }): string => theme.fonts.headline01B};

  ${({ theme }): string => theme.mediaQuery.tablet} {
    ${({ theme }): string => theme.fonts.headline02B};
  }

  ${({ theme }): string => theme.mediaQuery.mobile} {
    ${({ theme }): string => theme.fonts.headline02B};
  }
`

const CheckIcon = styled(Icon)`
  color: ${({ theme }): string => theme.colors.grayScale20};
  margin: 32px 0 32px 0;
  width: 100px;
  height: 100px;
`

const ReviewConfirmButton = styled(Button)`
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
  Container,
  Title,
  CheckIcon,
  ReviewConfirmButton
}
