import { useMedia, Divider } from '@offer-ui/react'
import type { ReactElement, MouseEvent } from 'react'
import { useState, useEffect } from 'react'
import { Styled } from './styled'
import type { PriceDialogProps } from './types'

const PriceDialog = ({
  minPriceValue,
  maxPriceValue,
  applyPrice,
  handleMinPriceInputChange,
  handleMaxPriceInputChange,
  handlePriceApplyClick
}: PriceDialogProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { desktop } = useMedia()

  const isApplied = applyPrice.maxPrice !== 0 && applyPrice.minPrice !== 0

  useEffect(() => {
    setIsOpen(isOpen)
  }, [isOpen])

  const handleDialogClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const handleDialogApplyClick = () => {
    handlePriceApplyClick()
    setIsOpen(false)
  }

  return (
    <>
      <Styled.Wrapper>
        <Styled.PriceDialogWrapper
          onClick={() => {
            setIsOpen(!isOpen)
          }}>
          {isApplied
            ? `${applyPrice.minPrice}원~${applyPrice.maxPrice}원`
            : '가격'}
          <Styled.PriceArrowDown type="chevronDown" />
        </Styled.PriceDialogWrapper>
        {isOpen ? (
          desktop ? (
            <>
              <Styled.DialogOverlay
                onClick={() => {
                  setIsOpen(false)
                }}
              />
              <Styled.PriceDialog onClick={handleDialogClick}>
                <Styled.Price>가격</Styled.Price>
                <Styled.InputWrapper>
                  <Styled.MinimumInput
                    isPrice
                    placeholder="최소 금액"
                    value={minPriceValue}
                    onChange={handleMinPriceInputChange}
                  />
                  ~
                  <Styled.MaximumInput
                    isPrice
                    placeholder="최대 금액"
                    value={maxPriceValue}
                    onChange={handleMaxPriceInputChange}
                  />
                </Styled.InputWrapper>
                <Divider direction="horizontal" />
                <Styled.ButtonWrapper>
                  <Styled.CancelButton
                    styleType="ghost"
                    onClick={() => {
                      setIsOpen(false)
                    }}>
                    취소
                  </Styled.CancelButton>
                  <Styled.ApplyButton
                    styleType="solidPrimary"
                    onClick={handleDialogApplyClick}>
                    적용하기
                  </Styled.ApplyButton>
                </Styled.ButtonWrapper>
              </Styled.PriceDialog>
            </>
          ) : (
            <Styled.Dim
              onClick={() => {
                setIsOpen(false)
              }}>
              <Styled.PriceDialog onClick={handleDialogClick}>
                <Styled.Price>가격</Styled.Price>
                <Styled.InputWrapper>
                  <Styled.MinimumInput
                    isPrice
                    placeholder="최소 금액"
                    value={minPriceValue}
                    onChange={handleMinPriceInputChange}
                  />
                  ~
                  <Styled.MaximumInput
                    isPrice
                    placeholder="최대 금액"
                    value={maxPriceValue}
                    onChange={handleMaxPriceInputChange}
                  />
                </Styled.InputWrapper>
                <Divider direction="horizontal" />
                <Styled.ButtonWrapper>
                  <Styled.CancelButton
                    styleType="ghost"
                    onClick={() => {
                      setIsOpen(false)
                    }}>
                    취소
                  </Styled.CancelButton>
                  <Styled.ApplyButton
                    styleType="solidPrimary"
                    onClick={handleDialogApplyClick}>
                    적용하기
                  </Styled.ApplyButton>
                </Styled.ButtonWrapper>
              </Styled.PriceDialog>
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
