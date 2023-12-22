import { Divider, Text } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import type { PostFieldProps } from './types'

const PostField = ({
  label,
  value,
  height = 50
}: PostFieldProps): ReactElement => {
  return (
    <Styled.PostField>
      <Divider direction="vertical" length={`${height}px`} />
      <Styled.TextWrapper height={height}>
        <Text color="grayScale70" styleType="body02M">
          {label}
        </Text>
        <Text styleType="subtitle01B">{value}</Text>
      </Styled.TextWrapper>
    </Styled.PostField>
  )
}

export { PostFieldProps, PostField }
