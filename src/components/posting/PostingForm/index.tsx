import styled from '@emotion/styled'
import { Text } from '@offer-ui/react'
import type { ReactElement, ReactNode } from 'react'
import { useState, useEffect, useRef } from 'react'

export type PostingFormProps = {
  label: string
  children: ReactNode
}

const MAX_CONTENT_HEIGHT = 48
type StyledPostingFormProps = {
  formAlign: FormAlign
}
type FormAlign = 'start' | 'center'

export const PostingForm = ({
  label,
  children
}: PostingFormProps): ReactElement => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [formAlign, setFormAlign] = useState<FormAlign>('center')

  useEffect(() => {
    const handleFormAlign = (): void => {
      if (wrapperRef.current) {
        const { clientHeight: wrapperClientHeight } = wrapperRef.current
        const alignType =
          MAX_CONTENT_HEIGHT < Number(wrapperClientHeight) ? 'start' : 'center'
        setFormAlign(alignType)
      }
    }

    window.addEventListener('resize', handleFormAlign)

    return () => {
      window.removeEventListener('resize', handleFormAlign)
    }
  }, [])

  return (
    <StyledPostingForm ref={wrapperRef} formAlign={formAlign}>
      <StyledLabel styleType="body01B">{label}</StyledLabel>
      {children}
    </StyledPostingForm>
  )
}

const StyledPostingForm = styled.div<StyledPostingFormProps>`
  display: flex;
  gap: 20px;
  align-items: ${({ formAlign }): string => formAlign};
`
const StyledLabel = styled(Text)`
  width: 100px;

  ${({ theme }): string => `
    ${theme.mediaQuery.tablet} {
      min-width: 60px;
      width: 60px;

      ${theme.fonts.body02B}
    }

    ${theme.mediaQuery.mobile} {
      min-width: 60px;
      width: 60px;
      
      ${theme.fonts.body02B}
    }
  `}
`
