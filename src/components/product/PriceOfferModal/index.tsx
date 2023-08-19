import { Modal, Input, Divider, Radio, Button } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
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

export const PriceOfferModal = (): ReactElement => {
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
          <Input isPrice placeholder="제안할 가격을 적어주세요" />
        </Styled.FormItemContainer>
        <Divider />
        <Styled.FormItemContainer isMainItem>
          <div>거래 방식</div>
          <Radio
            direction="horizontal"
            formName="trade-method"
            items={TRADE_METHOD}
            onChange={(): void => {
              // do something
            }}
          />
        </Styled.FormItemContainer>
        <Divider />
        <Styled.FormItemContainer>
          <div>거래 지역</div>
          <Styled.LocationSelectBoxWrapper
            items={MOCK_CITY}
            placeholder="선택"
            size="medium"
          />
        </Styled.FormItemContainer>
        <Styled.TradeLocation>
          <Styled.FormItemContainer>
            <div>시/군/구</div>
            <Styled.LocationSelectBoxWrapper
              items={MOCK_CITY}
              placeholder="선택"
              size="medium"
            />
          </Styled.FormItemContainer>
          <Styled.FormItemContainer>
            <div>읍/면/동</div>
            <Styled.LocationSelectBoxWrapper
              items={MOCK_CITY}
              placeholder="선택"
              size="medium"
            />
          </Styled.FormItemContainer>
        </Styled.TradeLocation>
      </Styled.Body>
      <div>
        <Button size="large">Offer !</Button>
      </div>
    </Modal>
  )
}
