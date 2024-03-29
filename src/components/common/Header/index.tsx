import { Avatar, Divider, IconButton, Button } from '@offer-ui/react'
import { useSetAtom } from 'jotai'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { SearchArea } from './SearchArea'
import { SideBar } from './SideBar'
import { Styled } from './styled'
import { Dialog } from '../Dialog'
import { LoginModal } from '../LoginModal'
import { toQueryString } from '@utils/format'
import { searchKeywordAtom } from '@atoms'
import { IMAGE } from '@constants'
import { useModal, useAuth } from '@hooks'

const PREVENT_ACTIVE_PATHS = ['/post']
const initDialog = {
  logout: false,
  search: false
}

const Header = (): ReactElement => {
  const router = useRouter()
  const isActivePath = !PREVENT_ACTIVE_PATHS.includes(router.pathname)
  const { isLogin, user, handleLogout } = useAuth()
  const loginModal = useModal()
  const sidebarModal = useModal()
  const [isOpenDialog, setIsOpenDialog] = useState(initDialog)
  const setSearchKeyword = useSetAtom(searchKeywordAtom)

  const handleOpenLoginModal = () => {
    loginModal.openModal()
  }

  const handleSubmitValue = (value?: string) => {
    if (value) {
      setSearchKeyword(value)
      router.push(
        `/result?${toQueryString({
          searchKeyword: value
        })}`
      )
    }
  }

  const handleClickLogo = () => {
    setIsOpenDialog(initDialog)
    router.push('/')
  }

  const handleClickSideBar = () => {
    setIsOpenDialog(initDialog)
    sidebarModal.openModal()
  }

  return (
    <>
      <Styled.HeaderWrapper>
        <Styled.HeaderContent>
          <Styled.LogoInputSection>
            <Styled.LogoButton styleType="ghost" onClick={handleClickLogo}>
              <Image alt="Logo" height={40} src={IMAGE.LOGO} width={72} />
            </Styled.LogoButton>
            {isActivePath && (
              <Styled.InputWrapper>
                <Styled.SearchInput
                  placeholder="검색어를 입력하세요"
                  onSubmitValue={handleSubmitValue}
                />
              </Styled.InputWrapper>
            )}
          </Styled.LogoInputSection>
          {isActivePath && (
            <Styled.ButtonSection>
              {isLogin ? (
                <>
                  <Styled.HeaderAuthButton
                    styleType="ghost"
                    type="button"
                    width="76px">
                    <Styled.TextLink href="/shop?tab=sale">
                      나의 거래활동
                    </Styled.TextLink>
                  </Styled.HeaderAuthButton>
                  <Divider direction="vertical" gap={16} />
                  <Styled.HeaderAuthButton styleType="ghost" width="37px">
                    <Styled.TextLink href="/messagebox">쪽지함</Styled.TextLink>
                  </Styled.HeaderAuthButton>
                  <Styled.HeaderProfileSection
                    onClick={() =>
                      setIsOpenDialog({
                        ...isOpenDialog,
                        logout: !isOpenDialog.logout
                      })
                    }>
                    <Avatar
                      alt="profile-image"
                      size="xsmall"
                      src={user.profileImageUrl}
                    />
                    <Styled.HeaderNickName>
                      {user.nickname}
                    </Styled.HeaderNickName>
                    <IconButton icon="triangleDown" />
                    {isOpenDialog.logout && (
                      <Dialog
                        dialogPositionStyle={{
                          top: '35px',
                          left: '15px'
                        }}
                        onClose={() =>
                          setIsOpenDialog({
                            ...isOpenDialog,
                            logout: false
                          })
                        }>
                        <Styled.LogoutButton onClick={handleLogout}>
                          로그아웃
                        </Styled.LogoutButton>
                      </Dialog>
                    )}
                  </Styled.HeaderProfileSection>
                  <Link href="/post">
                    <Button size="small" styleType="solidSub">
                      판매하기
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Styled.HeaderAuthButton
                    styleType="ghost"
                    width="37px"
                    onClick={handleOpenLoginModal}>
                    로그인
                  </Styled.HeaderAuthButton>
                  <Divider direction="vertical" gap={16} />
                  <Styled.HeaderAuthButton styleType="ghost" width="50px">
                    회원가입
                  </Styled.HeaderAuthButton>
                </>
              )}
            </Styled.ButtonSection>
          )}
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
            <IconButton icon="menu" size={24} onClick={handleClickSideBar} />
          </Styled.MenuSection>
        </Styled.HeaderContent>
      </Styled.HeaderWrapper>
      {isOpenDialog.search && (
        <SearchArea
          isOpen={isOpenDialog.search}
          onClose={() =>
            setIsOpenDialog({
              ...isOpenDialog,
              search: false
            })
          }
          onSubmitValue={handleSubmitValue}
        />
      )}
      <SideBar
        isLogin={isLogin}
        isOpen={sidebarModal.isOpen}
        onClose={() => sidebarModal.closeModal()}
      />
      <LoginModal isOpen={loginModal.isOpen} onClose={loginModal.closeModal} />
    </>
  )
}

export { Header }
