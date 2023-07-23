import { useMedia, Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import { Styled } from './styled'
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
      <Styled.Wrapper>
        <Styled.PriceDialogWrapper
          onClick={(): void => {
            setIsOpen(!isOpen)
          }}>
          <div>가격</div>
          <Styled.PriceArrowDown type="chevronDown"></Styled.PriceArrowDown>
        </Styled.PriceDialogWrapper>
        {/* <PriceInput isOpen={isOpen} onClose={setIsOpen}></PriceInput> */}
        {isOpen ? (
          desktop ? (
            <Styled.PriceDialogDesktop>
              <Styled.Price>가격</Styled.Price>
              <Styled.InputWrapper>
                <Styled.MinimumInput
                  isPrice
                  placeholder="최소 금액"
                  value={minPriceValue}
                  onChange={handleMinPriceInputChange}></Styled.MinimumInput>
                ~
                <Styled.MaximumInput
                  isPrice
                  placeholder="최대 금액"
                  value={maxPriceValue}
                  onChange={handleMaxPriceInputChange}></Styled.MaximumInput>
              </Styled.InputWrapper>
              <Divider direction="horizontal" />
              <Styled.ButtonWrapper>
                <Styled.CancelButton
                  styleType="ghost"
                  onClick={handleCancelClick}>
                  취소
                </Styled.CancelButton>
                <Styled.ApplyButton
                  styleType="solidPrimary"
                  onClick={handlePriceApplyClick}>
                  적용하기
                </Styled.ApplyButton>
              </Styled.ButtonWrapper>
            </Styled.PriceDialogDesktop>
          ) : (
            <Styled.Dim>
              <Styled.PriceDialogDesktop>
                <Styled.Price>가격</Styled.Price>
                <Styled.InputWrapper>
                  <Styled.MinimumInput
                    isPrice
                    placeholder="최소 금액"></Styled.MinimumInput>
                  ~
                  <Styled.MaximumInput
                    isPrice
                    placeholder="최대 금액"></Styled.MaximumInput>
                </Styled.InputWrapper>
                <Divider direction="horizontal" />
                <Styled.ButtonWrapper>
                  <Styled.CancelButton
                    styleType="ghost"
                    onClick={handleCancelClick}>
                    취소
                  </Styled.CancelButton>
                  <Styled.ApplyButton styleType="solidPrimary">
                    적용하기
                  </Styled.ApplyButton>
                </Styled.ButtonWrapper>
              </Styled.PriceDialogDesktop>
            </Styled.Dim>
          )
        ) : (
          <></>
        )}
      </Styled.Wrapper>
    </>
  )
}

export { PriceDialog, PriceDialogProps }
