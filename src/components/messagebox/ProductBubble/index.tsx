import { Badge, Divider, Image } from '@offer-ui/react'
import Link from 'next/link'
import { Styled } from './styled'
import type { ProductBubbleProps } from './types'
import { TRADE_TYPES } from '@constants/app'
import { toLocaleCurrency } from '@utils/format'

export const ProductBubble = ({
  id,
  title,
  price,
  offerPrice,
  tradeType,
  productImageUrl,
  onClick
}: ProductBubbleProps) => {
  const tradeLabel = TRADE_TYPES.find(item => item.code === tradeType)?.name

  const handleClickButton = () => {
    onClick?.(id)
  }

  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <Image
          alt="product"
          height="140px"
          src={productImageUrl}
          width="220px"
        />
      </Styled.ImageWrapper>
      <Styled.Content>
        <Badge colorType="purple">{tradeLabel || ''}</Badge>
        <Styled.ProductName>{title}</Styled.ProductName>
        <Divider gap={8} />
        <Styled.PriceItem>
          <span>시작가</span>
          <span>{toLocaleCurrency(price)}원</span>
        </Styled.PriceItem>
        <Styled.PriceItem>
          <Styled.OfferText>제안가</Styled.OfferText>
          <Styled.OfferPrice>
            {toLocaleCurrency(offerPrice)}원
          </Styled.OfferPrice>
        </Styled.PriceItem>
      </Styled.Content>
      <Styled.ButtonWrapper>
        <Link href={`/product/${id}`}>
          <Styled.ShowProductButton
            size="large"
            styleType="outline"
            onClick={() => handleClickButton()}>
            상품 보기
          </Styled.ShowProductButton>
        </Link>
      </Styled.ButtonWrapper>
    </Styled.Container>
  )
}
