import type { ReactElement } from 'react'
import { Styled } from './styled'
import type {} from './types'
import { ICON } from '@constants/icons'

const Logo = (): ReactElement => {
  const { Banner } = ICON

  return <Banner />
}

const Header = (): ReactElement => {
  return (
    <>
      <Styled.HeaderWrapper>
        <Styled.HeaderContent>
          <Styled.LogoInputSection>
            <Styled.LogoButton>{<Logo />}</Styled.LogoButton>
            <Styled.SearchInput
              placeholder="검색어를 입력하세요"
              styleType="search"
            />
          </Styled.LogoInputSection>
          <Styled.ButtonSection>
            <Styled.HeaderAuthButton styleType="ghost" width="37px">
              로그인
            </Styled.HeaderAuthButton>
            <Styled.ButtonDivider direction="vertical" gap={16} />
            <Styled.HeaderAuthButton styleType="ghost" width="50px">
              회원가입
            </Styled.HeaderAuthButton>
            <Styled.SellButton size="small" styleType="solidSub">
              판매하기
            </Styled.SellButton>
          </Styled.ButtonSection>
        </Styled.HeaderContent>
      </Styled.HeaderWrapper>
    </>
  )
}

export { Header }
