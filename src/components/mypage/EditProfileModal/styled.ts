import type { SerializedStyles } from '@emotion/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button } from '@offer-ui/react'

const Header = styled.div`
  text-align: center;

  ${({ theme }): string => theme.fonts.headline01B}
`

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: end;

  width: 100%;
  margin-bottom: 12px;
`

const Body = styled.div`
  margin: 20px 0 40px;
`

const UploaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
  padding: 10px 0;
`

const AvatarWrapper = styled.div`
  position: relative;
`

const CameraIconButton = styled.button`
  position: absolute;
  right: 4px;
  bottom: 4px;

  padding: 5px;
  border: none;

  cursor: pointer;

  ${({ theme }): SerializedStyles => css`
    border-radius: ${theme.radius.round100};

    background-color: ${theme.colors.grayScale50};
  `};
`

const EditNickName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const DuplicateButton = styled(Button)`
  ${({ theme }): SerializedStyles =>
    css`
      border-radius: ${theme.radius.round4};

      color: ${theme.colors.grayScale30};
    `};
`

export const Styled = {
  Header,
  CloseButtonWrapper,
  Body,
  UploaderWrapper,
  AvatarWrapper,
  CameraIconButton,
  EditNickName,
  DuplicateButton
}
