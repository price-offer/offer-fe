import { Input, Divider, IconButton, SelectBox } from '@offer-ui/react'
import type { ChangeEventHandler, ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type { OfferForm, PriceOfferModalProps, TradeAreaKeys } from './types'
import { TRADE_TYPES } from '@constants'

const MOCK_CITY = [
  { code: 1, name: 'Seoul' },
  {
    code: 2,
    name: 'Deajeon'
  },
  {
    code: 3,
    name: 'Incheon'
  }
]

export const PriceOfferModal = ({
  onClickOffer,
  ...props
}: PriceOfferModalProps): ReactElement => {
  const [offerForm, setOfferForm] = useState<OfferForm>({})
  const isTradeDirection = offerForm?.tradeMethod !== 4
  const isRequiredFormFilled = offerForm.price && offerForm.tradeMethod
  const isDirectionFormFilled =
    offerForm?.tradeArea?.city &&
    offerForm?.tradeArea?.county &&
    offerForm?.tradeArea?.town
  const canOffer = isTradeDirection
    ? isRequiredFormFilled && isDirectionFormFilled
    : isRequiredFormFilled

  const handleChangePrice: ChangeEventHandler<HTMLInputElement> = e => {
    const formattedValue = Number(e.target.value.split(',').join(''))

    setOfferForm(prev => ({
      ...prev,
      price: formattedValue
    }))
  }

  const handleChangeTradeMethod: ChangeEventHandler<HTMLFormElement> = e => {
    const tradeMethod = Number(e.target.value)
    const isTradeParcel = tradeMethod === 4
    const nextOfferFrom = {
      ...offerForm,
      tradeMethod
    }

    if (isTradeParcel) {
      delete nextOfferFrom.tradeArea
    }

    setOfferForm(nextOfferFrom)
  }

  const handleChangeTradeArea = (name: TradeAreaKeys, value: number): void => {
    setOfferForm(prev => ({
      ...prev,
      tradeArea: {
        ...prev.tradeArea,
        [name]: value
      }
    }))
  }

  const handleClickOffer = (): void => {
    onClickOffer?.(offerForm)
  }

  return (
    <Styled.PriceOfferModal {...props}>
      <Styled.Header>
        <Styled.CloseIconWrapper>
          <IconButton color="grayScale30" icon="close" size={24} />
        </Styled.CloseIconWrapper>
        <Styled.Title>가격을 제안해볼까요?</Styled.Title>
        <Styled.Description>
          가격이 마음에 든다면, 연락이 올거에요!
        </Styled.Description>
      </Styled.Header>
      <Styled.Body>
        <div>
          <Styled.FormTitle>제안 가격</Styled.FormTitle>
          <Input
            isPrice
            placeholder="제안할 가격을 적어주세요"
            value={offerForm.price}
            onChange={handleChangePrice}
          />
        </div>
        <Divider />
        <div>
          <Styled.FormTitle isMainTitle>거래 방식</Styled.FormTitle>
          <Styled.FormRadio
            direction="horizontal"
            formName="trade-method"
            items={TRADE_TYPES}
            onChange={handleChangeTradeMethod}
          />
        </div>
        {isTradeDirection && (
          <>
            <Divider />
            <div>
              <Styled.FormTitle>거래 지역</Styled.FormTitle>
              <SelectBox
                items={MOCK_CITY}
                placeholder="선택"
                size="medium"
                value={offerForm?.tradeArea?.city}
                onChange={(item): void =>
                  handleChangeTradeArea('city', item.code)
                }
              />
            </div>
            <Styled.TradeArea>
              <div>
                <Styled.FormTitle>시/군/구</Styled.FormTitle>
                <SelectBox
                  items={MOCK_CITY}
                  placeholder="선택"
                  size="medium"
                  value={offerForm?.tradeArea?.county}
                  onChange={(item): void =>
                    handleChangeTradeArea('county', item.code)
                  }
                />
              </div>
              <div>
                <Styled.FormTitle>읍/면/동</Styled.FormTitle>
                <SelectBox
                  items={MOCK_CITY}
                  placeholder="선택"
                  size="medium"
                  value={offerForm?.tradeArea?.town}
                  onChange={(item): void =>
                    handleChangeTradeArea('town', item.code)
                  }
                />
              </div>
            </Styled.TradeArea>
          </>
        )}
      </Styled.Body>
      <div>
        <Styled.OfferButton
          disabled={!canOffer}
          size="large"
          onClick={handleClickOffer}>
          Offer !
        </Styled.OfferButton>
      </div>
    </Styled.PriceOfferModal>
  )
}
