import styled from '@emotion/styled'
import { Text } from '@offer-ui/react'
import type { ReactElement, ReactNode } from 'react'

export interface PostingFormProps {
  label: string
  children: ReactNode
}

export const PostingForm = ({
  label,
  children
}: PostingFormProps): ReactElement => {
  return (
    <StyledPostingForm>
      <StyledLabel styleType="body01B">{label}</StyledLabel>
      {children}
    </StyledPostingForm>
  )
}

const StyledPostingForm = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`
const StyledLabel = styled(Text)`
  width: 100px;
`
