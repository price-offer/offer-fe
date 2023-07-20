import { Divider, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { StyledProductField, StyledTextWrapper } from './styled'
import type { ProductFieldProps } from './types'

export const ProductField = ({
  label,
  value,
  height = 50
}: ProductFieldProps): ReactElement => {
  return (
    <StyledProductField>
      <Divider direction="vertical" length={`${height}px`} />
      <StyledTextWrapper height={height}>
        <Text color="grayScale70" styleType="body02M">
          {label}
        </Text>
        <Text styleType="subtitle01B">{value}</Text>
      </StyledTextWrapper>
    </StyledProductField>
  )
}
