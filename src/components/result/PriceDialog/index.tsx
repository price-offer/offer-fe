import { useMedia, Divider } from '@offer-ui/react'
import type { ReactElement, MouseEvent, ChangeEvent } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type { PriceDialogProps, PriceRange } from './types'
import { useModal } from '@hooks/useModal'
import { localeCurrencyToNumber, toLocaleCurrency } from '@utils'

const PriceDialog = ({
  priceRange: defaultPriceRange,
  onClickApply
}: PriceDialogProps): ReactElement => {
  const [priceRange, setPriceRange] = useState<PriceRange>(defaultPriceRange)
  const priceDialog = useModal()
  const { desktop } = useMedia()

  const isAppliedRange = defaultPriceRange?.max && defaultPriceRange?.min

  const handleChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget

    setPriceRange(prev => ({
      ...prev,
      [name]: localeCurrencyToNumber(value)
    }))
  }

  const handleClickCancel = () => {
    setPriceRange(defaultPriceRange)
    priceDialog.closeModal()
  }

  const handleClickApply = () => {
    priceDialog.closeModal()
    onClickApply?.(priceRange)
  }

  const handleDialogClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
    <Styled.Wrapper>
      <Styled.PriceDialogWrapper onClick={priceDialog.toggle}>
        {isAppliedRange ? (
          <>
            가격
            <Styled.ApplyPrice>
              {`${toLocaleCurrency(
                defaultPriceRange?.min || 0
              )}원~${toLocaleCurrency(defaultPriceRange?.max || 0)}원`}
            </Styled.ApplyPrice>
          </>
        ) : (
          '가격'
        )}
        <Styled.PriceArrowDown type="chevronDown" />
      </Styled.PriceDialogWrapper>
      {priceDialog.isOpen ? (
        desktop ? (
          <>
            <Styled.DialogOverlay onClick={handleClickCancel} />
            <Styled.PriceDialog onClick={handleDialogClick}>
              <Styled.Price>가격</Styled.Price>
              <Styled.InputWrapper>
                <Styled.MinimumInput
                  isPrice
                  maxLength={13}
                  name="min"
                  placeholder="최소 금액"
                  value={priceRange.min}
                  onChange={handleChangePrice}
                />
                ~
                <Styled.MaximumInput
                  isPrice
                  maxLength={13}
                  name="max"
                  placeholder="최대 금액"
                  value={priceRange?.max}
                  onChange={handleChangePrice}
                />
              </Styled.InputWrapper>
              <Divider direction="horizontal" />
              <Styled.ButtonWrapper>
                <Styled.CancelButton
                  styleType="ghost"
                  onClick={handleClickCancel}>
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
          <Styled.Dim onClick={handleClickCancel}>
            <Styled.PriceDialog onClick={handleDialogClick}>
              <Styled.Price>가격</Styled.Price>
              <Styled.InputWrapper>
                <Styled.MinimumInput
                  isPrice
                  maxLength={13}
                  name="min"
                  placeholder="최소 금액"
                  value={priceRange?.min}
                  onChange={handleChangePrice}
                />
                ~
                <Styled.MaximumInput
                  isPrice
                  maxLength={13}
                  name="max"
                  placeholder="최대 금액"
                  value={priceRange?.max}
                  onChange={handleChangePrice}
                />
              </Styled.InputWrapper>
              <Divider direction="horizontal" />
              <Styled.ButtonWrapper>
                <Styled.CancelButton
                  styleType="ghost"
                  onClick={handleClickCancel}>
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
  )
}

export { PriceDialog, PriceDialogProps }
