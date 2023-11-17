import type { ReactElement } from 'react'
import { useState, useEffect, useRef } from 'react'
import { Styled } from './styled'
import type { FormAlign, PostFormProps } from './types'

const MAX_CONTENT_HEIGHT = 48

export const PostForm = ({ label, children }: PostFormProps): ReactElement => {
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
    <Styled.PostForm ref={wrapperRef} formAlign={formAlign}>
      <Styled.Label styleType="body01B">{label}</Styled.Label>
      {children}
    </Styled.PostForm>
  )
}
