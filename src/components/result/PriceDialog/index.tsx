import { useMedia, Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import {
  PriceDialogWrapper,
  Wrapper,
  PriceArrowDown,
  StyledDIM,
  PriceDialogDesktop,
  Price,
  InputWrapper,
  MinimumInput,
  MaximumInput,
  ButtonWrapper,
  CancelButton,
  ApplyButton
} from './styled'
import type { PriceDialogProps } from './types'

const PriceDialog = ({
  minPriceValue,
  maxPriceValue,
  handleMinPriceInputChange,
  handleMaxPriceInputChange,
  handlePriceApplyClick
}: PriceDialogProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { desktop } = useMedia()

  useEffect(() => {
    setIsOpen(isOpen)
  }, [isOpen])

  const handleCancelClick = (): void => {
    setIsOpen(false)
  }
  return (
    <>
      <Wrapper>
        <PriceDialogWrapper
          onClick={(): void => {
            setIsOpen(!isOpen)
          }}>
          <div>가격</div>
          <PriceArrowDown type="chevronDown"></PriceArrowDown>
        </PriceDialogWrapper>
        {/* <PriceInput isOpen={isOpen} onClose={setIsOpen}></PriceInput> */}
        {isOpen ? (
          desktop ? (
            <PriceDialogDesktop>
              <Price>가격</Price>
              <InputWrapper>
                <MinimumInput
                  isPrice
                  placeholder="최소 금액"
                  value={minPriceValue}
                  onChange={handleMinPriceInputChange}></MinimumInput>
                ~
                <MaximumInput
                  isPrice
                  placeholder="최대 금액"
                  value={maxPriceValue}
                  onChange={handleMaxPriceInputChange}></MaximumInput>
              </InputWrapper>
              <Divider direction="horizontal" />
              <ButtonWrapper>
                <CancelButton styleType="ghost" onClick={handleCancelClick}>
                  취소
                </CancelButton>
                <ApplyButton
                  styleType="solidPrimary"
                  onClick={handlePriceApplyClick}>
                  적용하기
                </ApplyButton>
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
        )}
      </Wrapper>
    </>
  )
}

export { PriceDialog }
