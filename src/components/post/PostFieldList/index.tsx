import { Divider, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { PostFieldListProps } from './types'

const PostFieldList = ({
  productCondition = '새상품',
  tradeType = '직거래/택배거래',
  date,
  location,
  height = 50
}: PostFieldListProps): ReactElement => {
  const fields = [
    {
      title: '작성일',
      description: date
    },
    {
      title: '상품 상태',
      description: productCondition
    },
    {
      title: '거래 방식',
      description: tradeType
    },
    { title: '거래 지역', description: location }
  ]

  return (
    <>
      {fields.map(({ title, description }) => (
        <Styled.PostFieldList key={title}>
          <Divider direction="vertical" length={`${height}px`} />
          <Styled.TextWrapper height={height}>
            <Text color="grayScale70" styleType="body02M">
              {title}
            </Text>
            <Text styleType="subtitle01B">{description}</Text>
          </Styled.TextWrapper>
        </Styled.PostFieldList>
      ))}
    </>
  )
}

export { PostFieldListProps, PostFieldList }
