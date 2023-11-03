import React from 'react'
import { Styled } from './styled'
import type { SearchAreaProps } from './types'

export const SearchArea = ({ onClose }: SearchAreaProps) => {
  return (
    <Styled.SearchAreaWrapper>
      <Styled.InputWrapper>
        <Styled.SearchInput styleType="search" />
        <Styled.CancelButton styleType="ghost" onClick={onClose}>
          취소
        </Styled.CancelButton>
      </Styled.InputWrapper>
    </Styled.SearchAreaWrapper>
  )
}
