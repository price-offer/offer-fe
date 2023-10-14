import { Avatar, Divider, IconButton, Button } from '@offer-ui/react'
import Image from 'next/image'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { HeaderDialog } from './Dialog'
import { SideBar } from './SideBar'
import { Styled } from './styled'
import type {} from './types'
import { IMAGE } from '@constants/images'

const Header = (): ReactElement => {
  const { LOGO } = IMAGE

  const isLogin = false

  const [isOpenLogoutDialog, setIsOpenLogoutDialog] = useState(true)
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)

  return (
    <>
      <Styled.HeaderWrapper>
        <Styled.HeaderContent>
          <Styled.LogoInputSection>
            <Styled.LogoButton styleType="ghost">
              {<Image alt="d" src={LOGO} />}
            </Styled.LogoButton>
            <Styled.InputWrapper>
              <Styled.SearchInput
                placeholder="검색어를 입력하세요"
                styleType="search"
              />
            </Styled.InputWrapper>
          </Styled.LogoInputSection>
          <Styled.ButtonSection>
            {isLogin ? (
              <>
                <Styled.HeaderAuthButton styleType="ghost" width="76px">
                  나의 거래활동
                </Styled.HeaderAuthButton>
                <Divider direction="vertical" gap={16} />
                <Styled.HeaderAuthButton styleType="ghost" width="37px">
                  쪽지함
                </Styled.HeaderAuthButton>
                <Styled.HeaderProfileSection>
                  <Avatar alt="profile-image" size="xsmall" src="" />
                  <Styled.HeaderNickName>부드러운 냉장고</Styled.HeaderNickName>
                  <IconButton
                    icon="triangleDown"
                    onClick={() => setIsOpenLogoutDialog(!isOpenLogoutDialog)}
                  />
                  <HeaderDialog
                    handleClickDialog={() => setIsOpenLogoutDialog(false)}
                    isOpen={isOpenLogoutDialog}>
                    로그아웃
                  </HeaderDialog>
                </Styled.HeaderProfileSection>
              </>
            ) : (
              <>
                <Styled.HeaderAuthButton styleType="ghost" width="37px">
                  로그인
                </Styled.HeaderAuthButton>
                <Divider direction="vertical" gap={16} />
                <Styled.HeaderAuthButton styleType="ghost" width="50px">
                  회원가입
                </Styled.HeaderAuthButton>
                <Styled.SellButtonDivider />
              </>
            )}
            <Button size="small" styleType="solidSub">
              판매하기
            </Button>
          </Styled.ButtonSection>
          <Styled.MenuSection>
            <IconButton
              icon="search"
              size={24}
              onClick={() => setIsOpenLogoutDialog(!isOpenLogoutDialog)}
            />
            <IconButton
              icon="menu"
              size={24}
              onClick={() => setIsOpenSideBar(true)}
            />
            <SideBar
              isOpen={isOpenSideBar}
              onClose={() => setIsOpenSideBar(false)}
            />
          </Styled.MenuSection>
        </Styled.HeaderContent>
      </Styled.HeaderWrapper>
    </>
  )
}

export { Header }
