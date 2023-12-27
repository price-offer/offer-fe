import { Divider, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { PostFieldListProps } from './types'

const PostFieldList = ({
  productCondition,
  tradeType,
  date,
  location,
  height = 50
}: PostFieldListProps): ReactElement => {
  const fields = [
    {
      label: '작성일',
      value: date
    },
    {
      label: '상품 상태',
      value: productCondition
    },
    {
      label: '거래 방식',
      value: tradeType
    },
    { label: '거래 지역', value: location }
  ]

  return (
    <>
      {fields.map(({ label, value }) => (
        <Styled.PostFieldList key={label}>
          <Divider direction="vertical" length={`${height}px`} />
          <Styled.TextWrapper height={height}>
            <Text color="grayScale70" styleType="body02M">
              {label}
            </Text>
            <Text styleType="subtitle01B">{value}</Text>
          </Styled.TextWrapper>
        </Styled.PostFieldList>
      ))}
    </>
  )
}

export { PostFieldListProps, PostFieldList }
