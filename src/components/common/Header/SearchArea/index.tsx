import React from 'react'
import { Styled } from './styled'
import type { SearchAreaProps } from './types'

export const SearchArea = ({ onClose }: SearchAreaProps) => {
  return (
    <Styled.SearchAreaWrapper>
      <Styled.InputWrapper>
        <Styled.SearchInput placeholder="검색어를 입력하세요" />
        <Styled.CancelButton styleType="ghost" onClick={onClose}>
          취소
        </Styled.CancelButton>
      </Styled.InputWrapper>
    </Styled.SearchAreaWrapper>
  )
}
