import { Avatar, Divider, IconButton, Button } from '@offer-ui/react'
import Image from 'next/image'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { Dialog } from '../Dialog'
import { SideBar } from './SideBar'
import { Styled } from './styled'

const Header = (): ReactElement => {
  const isLogin = true

  const [isOpenDialog, setIsOpenDialog] = useState({
    logout: false,
    search: false
  })

  const [isOpenSideBar, setIsOpenSideBar] = useState(false)

  return (
    <>
      <Styled.HeaderWrapper>
        <Styled.HeaderContent>
          <Styled.LogoInputSection>
            <Styled.LogoButton styleType="ghost">
              {
                <Image
                  alt="Logo"
                  height={40}
                  src="/images/logo.svg"
                  width={72}
                />
              }
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
                <Styled.HeaderProfileSection
                  onClick={() =>
                    setIsOpenDialog({
                      ...isOpenDialog,
                      logout: !isOpenDialog.logout
                    })
                  }>
                  <Avatar alt="profile-image" size="xsmall" src="" />
                  <Styled.HeaderNickName>부드러운 냉장고</Styled.HeaderNickName>
                  <IconButton icon="triangleDown" />
                  <Dialog
                    dialogPositionStyle={{
                      top: '35px',
                      left: '15px'
                    }}
                    handleClickDialog={() =>
                      setIsOpenDialog({
                        ...isOpenDialog,
                        logout: !isOpenDialog.logout
                      })
                    }
                    isOpen={isOpenDialog.logout}
                    onClose={() =>
                      setIsOpenDialog({
                        ...isOpenDialog,
                        logout: false
                      })
                    }>
                    <Styled.LogoutText>로그아웃</Styled.LogoutText>
                  </Dialog>
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
              onClick={() =>
                setIsOpenDialog({
                  ...isOpenDialog,
                  search: !isOpenDialog.search
                })
              }
            />
            <IconButton
              icon="menu"
              size={24}
              onClick={() => setIsOpenSideBar(true)}
            />
            <Dialog
              dialogPositionStyle={{
                top: '60px',
                right: '0'
              }}
              isOpen={isOpenDialog.search}
              onClose={() =>
                setIsOpenDialog({
                  ...isOpenDialog,
                  search: false
                })
              }>
              <Styled.SearchInput styleType="search" />
            </Dialog>
            <SideBar
              isLogin={isLogin}
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
