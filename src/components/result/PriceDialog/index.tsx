import { useMedia, Divider } from '@offer-ui/react'
import type { ReactElement, MouseEvent } from 'react'
import { useState, useEffect } from 'react'
import { Styled } from './styled'
import type { PriceDialogProps } from './types'
import { toLocaleCurrency } from '@utils'
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

  const isApplied = applyPrice.maxPrice && applyPrice.minPrice

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
          {isApplied ? (
            <>
              가격
              <Styled.ApplyPrice>
                {`${toLocaleCurrency(
                  Number(applyPrice.minPrice)
                )}원~${toLocaleCurrency(Number(applyPrice.maxPrice))}원`}
              </Styled.ApplyPrice>
            </>
          ) : (
            '가격'
          )}
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
                    maxLength={13}
                    placeholder="최소 금액"
                    value={minPriceValue}
                    onChange={handleMinPriceInputChange}
                  />
                  ~
                  <Styled.MaximumInput
                    isPrice
                    maxLength={13}
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
                    maxLength={13}
                    placeholder="최소 금액"
                    value={minPriceValue}
                    onChange={handleMinPriceInputChange}
                  />
                  ~
                  <Styled.MaximumInput
                    isPrice
                    maxLength={13}
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
