import { Divider, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { ProductFieldProps } from './types'

const ProductField = ({
  label,
  value,
  height = 50
}: ProductFieldProps): ReactElement => {
  return (
    <Styled.ProductField>
      <Divider direction="vertical" length={`${height}px`} />
      <Styled.TextWrapper height={height}>
        <Text color="grayScale70" styleType="body02M">
          {label}
        </Text>
        <Text styleType="subtitle01B">{value}</Text>
      </Styled.TextWrapper>
    </Styled.ProductField>
  )
}

export { ProductFieldProps, ProductField }
