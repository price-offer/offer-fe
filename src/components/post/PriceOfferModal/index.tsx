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
  onClose,
  ...props
}: PriceOfferModalProps): ReactElement => {
  const [offerForm, setOfferForm] = useState<OfferForm>({})
  const isTradeDirection = offerForm?.tradeType !== 'SHIPPING'
  const offerPrice = Number(offerForm.price?.replaceAll(',', ''))
  const isRequiredFormFilled =
    Boolean(offerPrice) && Boolean(offerForm.tradeType)
  const isDirectionFormFilled =
    Boolean(offerForm?.tradeArea?.city) &&
    Boolean(offerForm?.tradeArea?.county) &&
    Boolean(offerForm?.tradeArea?.town)

  const canOffer = isTradeDirection
    ? isRequiredFormFilled && isDirectionFormFilled
    : isRequiredFormFilled

  const handleChangePrice: ChangeEventHandler<HTMLInputElement> = e => {
    setOfferForm(prev => ({
      ...prev,
      price: e.target.value
    }))
  }

  const handleCloseModal = () => {
    onClose?.()

    // ods Radio 컴포넌트 수정 후 reset 잘 이루어지는지 확인하기
    setOfferForm({})
  }

  const handleChangeTradeType: ChangeEventHandler<HTMLFormElement> = e => {
    const tradeType = e.target.value
    const isTradeParcel = tradeType === 'SHIPPING'
    const nextOfferFrom = {
      ...offerForm,
      tradeType
    }

    if (isTradeParcel) {
      delete nextOfferFrom.tradeArea
    }

    setOfferForm(nextOfferFrom)
  }

  const handleChangeTradeArea = (name: TradeAreaKeys, value: string): void => {
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
    <Styled.PriceOfferModal onClose={handleCloseModal} {...props}>
      <Styled.Header>
        <Styled.CloseIconWrapper>
          <IconButton
            color="grayScale30"
            icon="close"
            size={24}
            onClick={handleCloseModal}
          />
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
            value={offerForm.price || ''}
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
            onChange={handleChangeTradeType}
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
                value={offerForm?.tradeArea?.city || ''}
                onChange={(item): void =>
                  handleChangeTradeArea('city', item.name)
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
                  value={offerForm?.tradeArea?.county || ''}
                  onChange={(item): void =>
                    handleChangeTradeArea('county', item.name)
                  }
                />
              </div>
              <div>
                <Styled.FormTitle>읍/면/동</Styled.FormTitle>
                <SelectBox
                  items={MOCK_CITY}
                  placeholder="선택"
                  size="medium"
                  value={offerForm?.tradeArea?.town || ''}
                  onChange={(item): void =>
                    handleChangeTradeArea('town', item.name)
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
