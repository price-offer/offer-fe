import { Modal, Input, Divider, Radio } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import type { OfferForm, PriceOfferModalProps } from './types'
import { TRADE_METHOD } from '@constants'

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

const initialOfferForm = {
  tradeMethod: 0,
  tradeLocation: {
    city: 0,
    country: 0,
    town: 0
  }
}

export const PriceOfferModal = ({
  handleClickOffer
}: PriceOfferModalProps): ReactElement => {
  const [offerForm, setOfferForm] = useState<OfferForm>(initialOfferForm)
  const isTradeDirect = offerForm.tradeMethod !== 8
  const canOffer =
    !!offerForm.price &&
    !!offerForm.tradeMethod &&
    !!offerForm.tradeLocation.city &&
    !!offerForm.tradeLocation.country &&
    !!offerForm.tradeLocation.town

  const handleChangeForm = (
    name: 'price' | 'tradeMethod',
    value: string
  ): void => {
    const numberValue = Number(value.split(',').join(''))

    setOfferForm(prev => ({
      ...prev,
      [name]: numberValue
    }))
  }

  const handleChangeSelectBox = (
    name: keyof OfferForm['tradeLocation'],
    value: number
  ): void => {
    setOfferForm(prev => ({
      ...prev,
      tradeLocation: {
        ...prev.tradeLocation,
        [name]: value
      }
    }))
  }

  return (
    <Modal isOpen>
      <Styled.Header>
        <Styled.Title>가격을 제안해볼까요?</Styled.Title>
        <Styled.Description>
          가격이 마음에 든다면, 연락이 올거에요!
        </Styled.Description>
      </Styled.Header>
      <Styled.Body>
        <Styled.FormItemContainer>
          <div>제안 가격</div>
          <Input
            isPrice
            placeholder="제안할 가격을 적어주세요"
            value={offerForm.price}
            onChange={(e): void => handleChangeForm('price', e.target.value)}
          />
        </Styled.FormItemContainer>
        <Divider />
        <Styled.FormItemContainer isMainItem>
          <div>거래 방식</div>
          <Radio
            direction="horizontal"
            formName="trade-method"
            items={TRADE_METHOD}
            onChange={(e): void =>
              handleChangeForm('tradeMethod', e.target.value)
            }
          />
        </Styled.FormItemContainer>
        {isTradeDirect && (
          <>
            <Divider />
            <Styled.FormItemContainer>
              <div>거래 지역</div>
              <Styled.LocationSelectBoxWrapper
                items={MOCK_CITY}
                placeholder="선택"
                size="medium"
                value={offerForm.tradeLocation.city}
                onChange={(item): void =>
                  handleChangeSelectBox('city', item.code)
                }
              />
            </Styled.FormItemContainer>
            <Styled.TradeLocation>
              <Styled.FormItemContainer>
                <div>시/군/구</div>
                <Styled.LocationSelectBoxWrapper
                  items={MOCK_CITY}
                  placeholder="선택"
                  size="medium"
                  value={offerForm.tradeLocation.country}
                  onChange={(item): void =>
                    handleChangeSelectBox('country', item.code)
                  }
                />
              </Styled.FormItemContainer>
              <Styled.FormItemContainer>
                <div>읍/면/동</div>
                <Styled.LocationSelectBoxWrapper
                  items={MOCK_CITY}
                  placeholder="선택"
                  size="medium"
                  value={offerForm.tradeLocation.town}
                  onChange={(item): void =>
                    handleChangeSelectBox('town', item.code)
                  }
                />
              </Styled.FormItemContainer>
            </Styled.TradeLocation>
          </>
        )}
      </Styled.Body>
      <div>
        <Styled.OfferButton
          disabled={!canOffer}
          size="large"
          onClick={(): void => handleClickOffer(offerForm)}>
          Offer !
        </Styled.OfferButton>
      </div>
    </Modal>
  )
}
