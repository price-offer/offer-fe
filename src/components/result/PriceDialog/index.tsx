import styled from '@emotion/styled'
import { Icon, useMedia, Divider, Input, Button } from '@offer-ui/react'
import type { ReactElement, ChangeEventHandler } from 'react'
import { useState, useEffect } from 'react'

type Props = {
  minPriceValue: string
  maxPriceValue: string
  handleMinPriceInputChange: ChangeEventHandler
  handleMaxPriceInputChange: ChangeEventHandler
  handlePriceApplyClick(): void
}

const PriceDialog = ({
  minPriceValue,
  maxPriceValue,
  handleMinPriceInputChange,
  handleMaxPriceInputChange,
  handlePriceApplyClick
}: Props): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { desktop } = useMedia()

  useEffect(() => {
    setIsOpen(isOpen)
  }, [isOpen])

  const handleCancelClick = (): void => {
    setIsOpen(false)
  }
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
        {/* <PriceInput isOpen={isOpen} onClose={setIsOpen}></PriceInput> */}
        {isOpen ? (
          desktop ? (
            <PriceDialogDesktop>
              <Price>가격</Price>
              <InputWrapper>
                <MinimumInput
                  isPrice
                  placeholder="최소 금액"
                  value={minPriceValue}
                  onChange={handleMinPriceInputChange}></MinimumInput>
                ~
                <MaximumInput
                  isPrice
                  placeholder="최대 금액"
                  value={maxPriceValue}
                  onChange={handleMaxPriceInputChange}></MaximumInput>
              </InputWrapper>
              <Divider direction="horizontal" />
              <ButtonWrapper>
                <CancelButton styleType="ghost" onClick={handleCancelClick}>
                  취소
                </CancelButton>
                <ApplyButton
                  styleType="solidPrimary"
                  onClick={handlePriceApplyClick}>
                  적용하기
                </ApplyButton>
              </ButtonWrapper>
            </PriceDialogDesktop>
          ) : (
            <StyledDIM>
              <PriceDialogDesktop>
                <Price>가격</Price>
                <InputWrapper>
                  <MinimumInput isPrice placeholder="최소 금액"></MinimumInput>~
                  <MaximumInput isPrice placeholder="최대 금액"></MaximumInput>
                </InputWrapper>
                <Divider direction="horizontal" />
                <ButtonWrapper>
                  <CancelButton styleType="ghost" onClick={handleCancelClick}>
                    취소
                  </CancelButton>
                  <ApplyButton styleType="solidPrimary">적용하기</ApplyButton>
                </ButtonWrapper>
              </PriceDialogDesktop>
            </StyledDIM>
          )
        ) : (
          <></>
        )}
      </Wrapper>
    </>
  )
}

export { PriceDialog }

const PriceDialogWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 61px;
  height: 32px;
  border: solid 1px ${({ theme }): string => theme.colors.grayScale20};
  border-radius: 4px;

  background-color: ${({ theme }): string => theme.colors.white};

  ${({ theme }): string => theme.fonts.body02B};
`

const Wrapper = styled.div`
  position: relative;
`

const PriceArrowDown = styled(Icon)`
  width: 16px;
  height: 16px;
`

const StyledDIM = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }): number => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }): string => theme.colors.dimOpacity50};
`

const PriceDialogDesktop = styled.div`
  position: absolute;
  top: 38px;
  left: 1px;
  z-index: 999;

  width: 344px;
  height: 164px;
  padding: 16px 12px;
  border-radius: 4px;

  background-color: ${({ theme }): string => theme.colors.white};
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  ${({ theme }): string => theme.mediaQuery.tablet} {
    position: relative;

    width: 320px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    position: relative;

    width: 320px;
    padding: 16px 24px;
  }
`

const Price = styled.div`
  ${({ theme }): string => theme.fonts.body01B};
`
const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  margin-top: 12px;
`

const MinimumInput = styled(Input)`
  max-width: 148px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    max-width: 136px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    max-width: 124px;
  }
`

const MaximumInput = styled(Input)`
  max-width: 148px;
  ${({ theme }): string => theme.mediaQuery.tablet} {
    max-width: 136px;
  }
  ${({ theme }): string => theme.mediaQuery.mobile} {
    max-width: 124px;
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;

  margin-top: 12px;
`

const CancelButton = styled(Button)`
  max-width: 65px;
  height: 32px;
`
const ApplyButton = styled(Button)`
  max-width: 65px;
  height: 32px;
  border-radius: 4px;

  background-color: ${({ theme }): string => theme.colors.black};
`
