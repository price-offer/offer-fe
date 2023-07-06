import styled from '@emotion/styled'
import { Divider, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import type { StyledProps } from '@types'

export type ProductFieldProps = {
  label: string
  value: string
  height?: number
}
type StyledTextWrapperProps = StyledProps<ProductFieldProps, 'height'>

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
const StyledProductField = styled.div`
  display: flex;
  gap: 12px;
`
const StyledTextWrapper = styled.div<StyledTextWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: ${({ height }): string => `${height}px`};
`
