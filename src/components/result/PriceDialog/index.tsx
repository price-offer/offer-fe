import { useMedia, Divider } from '@offer-ui/react'
import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type { PriceDialogProps } from './types'
import { toLocaleCurrency } from '@utils'
const PriceDialog = ({
  inputPrice,
  applyPrice,
  handlePriceInputChange,
  handlePriceApplyClick
}: PriceDialogProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { desktop } = useMedia()

  const isApplied = applyPrice?.maxPrice && applyPrice?.minPrice

  const handleDialogClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const handleCloseDialog = () => {
    setIsOpen(false)
  }

  const handleClickApply = () => {
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
              <Styled.DialogOverlay onClick={handleCloseDialog} />
              <Styled.PriceDialog onClick={handleDialogClick}>
                <Styled.Price>가격</Styled.Price>
                <Styled.InputWrapper>
                  <Styled.MinimumInput
                    isPrice
                    maxLength={13}
                    name="minPrice"
                    placeholder="최소 금액"
                    value={inputPrice?.minPrice}
                    onChange={handlePriceInputChange}
                  />
                  ~
                  <Styled.MaximumInput
                    isPrice
                    maxLength={13}
                    name="maxPrice"
                    placeholder="최대 금액"
                    value={inputPrice?.maxPrice}
                    onChange={handlePriceInputChange}
                  />
                </Styled.InputWrapper>
                <Divider direction="horizontal" />
                <Styled.ButtonWrapper>
                  <Styled.CancelButton
                    styleType="ghost"
                    onClick={handleCloseDialog}>
                    취소
                  </Styled.CancelButton>
                  <Styled.ApplyButton
                    styleType="solidPrimary"
                    onClick={handleClickApply}>
                    적용하기
                  </Styled.ApplyButton>
                </Styled.ButtonWrapper>
              </Styled.PriceDialog>
            </>
          ) : (
            <Styled.Dim onClick={handleCloseDialog}>
              <Styled.PriceDialog onClick={handleDialogClick}>
                <Styled.Price>가격</Styled.Price>
                <Styled.InputWrapper>
                  <Styled.MinimumInput
                    isPrice
                    maxLength={13}
                    name="minPrice"
                    placeholder="최소 금액"
                    value={inputPrice?.minPrice}
                    onChange={handlePriceInputChange}
                  />
                  ~
                  <Styled.MaximumInput
                    isPrice
                    maxLength={13}
                    name="maxPrice"
                    placeholder="최대 금액"
                    value={inputPrice?.maxPrice}
                    onChange={handlePriceInputChange}
                  />
                </Styled.InputWrapper>
                <Divider direction="horizontal" />
                <Styled.ButtonWrapper>
                  <Styled.CancelButton
                    styleType="ghost"
                    onClick={handleCloseDialog}>
                    취소
                  </Styled.CancelButton>
                  <Styled.ApplyButton
                    styleType="solidPrimary"
                    onClick={handleClickApply}>
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
