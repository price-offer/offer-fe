import styled from '@emotion/styled'
import { Input, Button, useMedia, Divider } from '@offer-ui/react'
import type { Dispatch, ReactElement, SetStateAction } from 'react'
import { useState, useEffect } from 'react'

interface PriceInputProps {
  isOpen: boolean
  onClose: Dispatch<SetStateAction<boolean>>
}
const PriceInput = ({ isOpen, onClose }: PriceInputProps): ReactElement => {
  const [dialogIsOpen, setIsOpen] = useState<boolean>(false)
  const { desktop } = useMedia()
  useEffect(() => {
    setIsOpen(isOpen)
  }, [isOpen])

  const handleCancelClick = (): void => {
    setIsOpen(false)
    onClose(false)
  }
  return dialogIsOpen ? (
    desktop ? (
      <PriceDialogDesktop>
        <Price>가격</Price>
        <InputWrapper>
          <MinimumInput isPrice placeholder="최소 금액"></MinimumInput>~
          <MaximumInput isPrice placeholder="최대 금액"></MaximumInput>
        </InputWrapper>
        <Divider direction="horizontal" />
        <ButtonWrapper>
          <CancelButton styleType="ghost" onClick={handleCancelClick}>
            취소
          </CancelButton>
          <ApplyButton styleType="solidPrimary">적용하기</ApplyButton>
        </ButtonWrapper>
      </PriceDialogDesktop>
    ) : (
      <StyledDIM>
        <PriceDialogDesktop>
          <Price>가격</Price>
          <InputWrapper>
            <MinimumInput isPrice placeholder="최소 금액"></MinimumInput>~
            <MaximumInput isPrice placeholder="최대 금액"></MaximumInput>
          </InputWrapper>
          <Divider direction="horizontal" />
          <ButtonWrapper>
            <CancelButton styleType="ghost" onClick={handleCancelClick}>
              취소
            </CancelButton>
            <ApplyButton styleType="solidPrimary">적용하기</ApplyButton>
          </ButtonWrapper>
        </PriceDialogDesktop>
      </StyledDIM>
    )
  ) : (
    <></>
  )
}

export { PriceInput }

const StyledDIM = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: ${({ theme }): number => theme.zIndex.modal};
  background-color: ${({ theme }): string => theme.colors.dimOpacity50};
`

const PriceDialogDesktop = styled.div`
  position: absolute;
  width: 344px;
  height: 164px;
  background-color: ${({ theme }): string => theme.colors.white};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  top: 38px;
  left: 1px;
  padding: 16px 12px;
  z-index: 999;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    position: relative;
    width: 320px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    position: relative;
    width: 320px;
    padding: 16px 24px;
  }
`

const Price = styled.div`
  ${({ theme }): string => theme.fonts.body01B};
`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
`

const MinimumInput = styled(Input)`
  max-width: 148px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    max-width: 136px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    max-width: 124px;
  }
`

const MaximumInput = styled(Input)`
  max-width: 148px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    max-width: 136px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    max-width: 124px;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 12px;
`

const CancelButton = styled(Button)`
  max-width: 65px;
  height: 32px;
`
const ApplyButton = styled(Button)`
  background-color: ${({ theme }): string => theme.colors.black};
  max-width: 65px;
  height: 32px;
  border-radius: 4px;
`
