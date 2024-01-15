import styled from '@emotion/styled'
import { Button, Input } from '@offer-ui/react'

const SearchAreaWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;

  background-color: ${({ theme }): string => theme.colors.white};
`

const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  padding: 36px 16px;
`

const SearchInput = styled(Input.Search)`
  width: 100%;
  margin: 0;
`

const CancelButton = styled(Button)`
  width: 41px;
  margin: 0;
`

export const Styled = {
  SearchAreaWrapper,
  SearchInput,
  InputWrapper,
  CancelButton
}
