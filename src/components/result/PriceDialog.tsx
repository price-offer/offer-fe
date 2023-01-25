import styled from '@emotion/styled'
import { Icon } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { PriceInput } from './PriceInput'

const PriceDialog = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <Wrapper>
        <PriceDialogWrapper
          onClick={(): void => {
            setIsOpen(!isOpen)
          }}>
          <div>가격</div>
          <PriceArrowDown type="chevronDown"></PriceArrowDown>
        </PriceDialogWrapper>
        <PriceInput isOpen={isOpen} onClose={setIsOpen}></PriceInput>
      </Wrapper>
    </>
  )
}

export { PriceDialog }

const PriceDialogWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 4px;
  align-items: center;
  ${({ theme }): string => theme.fonts.body02B};
  background-color: ${({ theme }): string => theme.colors.white};
  width: 61px;
  height: 32px;
  border: solid 1px ${({ theme }): string => theme.colors.grayScale20};
  border-radius: 4px;
`

const Wrapper = styled.div`
  position: relative;
`

const PriceArrowDown = styled(Icon)`
  width: 16px;
  height: 16px;
`
