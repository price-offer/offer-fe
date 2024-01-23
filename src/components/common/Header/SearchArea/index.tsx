import React from 'react'
import { Styled } from './styled'
import type { SearchAreaProps } from './types'

export const SearchArea = ({ onClose, onSubmitValue }: SearchAreaProps) => {
  const handleSubmitValue = (value: string) => {
    onSubmitValue(value)
    onClose()
  }

  return (
    <Styled.SearchAreaWrapper>
      <Styled.InputWrapper>
        <Styled.SearchInput
          placeholder="검색어를 입력하세요"
          onSubmitValue={handleSubmitValue}
        />
        <Styled.CancelButton styleType="ghost" onClick={onClose}>
          취소
        </Styled.CancelButton>
      </Styled.InputWrapper>
    </Styled.SearchAreaWrapper>
  )
}
