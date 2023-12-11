import { Avatar, Divider, IconButton, Button } from '@offer-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { SearchArea } from './SearchArea'
import { SideBar } from './SideBar'
import { Styled } from './styled'
import { CommonModal } from '../CommonModal'
import { Dialog } from '../Dialog'
import { OAUTH_URL } from '@constants/oauth'
import { useAuth } from '@hooks/useAuth'
import useModal from '@hooks/useModal'
import { IMAGE } from '@constants'

const Header = (): ReactElement => {
  const router = useRouter()
  const { isLogin, user } = useAuth()
  const { isOpen, openModal, closeModal } = useModal()
  const [isOpenSideBar, setIsOpenSideBar] = useState(false)
  const [isOpenDialog, setIsOpenDialog] = useState({
    logout: false,
    search: false
  })

  const handleOpenLoginModal = () => {
    openModal()
  }

  const handleClickLogin = () => {
    router.replace(OAUTH_URL.KAKAO)
  }

  return (
    <>
      <Styled.HeaderWrapper>
        <Styled.HeaderContent>
          <Styled.LogoInputSection>
            <Link href="/">
              <Styled.LogoButton styleType="ghost">
                <Image alt="Logo" height={40} src={IMAGE.LOGO} width={72} />
              </Styled.LogoButton>
            </Link>
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
                <Styled.HeaderAuthButton
                  styleType="ghost"
                  type="button"
                  width="76px">
                  <Styled.TextLink href="/mypage">
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
                  <Styled.HeaderNickName>{user.nickname}</Styled.HeaderNickName>
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
                      <Styled.LogoutText>로그아웃</Styled.LogoutText>
                    </Dialog>
                  )}
                </Styled.HeaderProfileSection>
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
                <Styled.SellButtonDivider />
              </>
            )}
            <Link href="/post">
              <Button size="small" styleType="solidSub">
                판매하기
              </Button>
            </Link>
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
        />
      )}
      <SideBar
        isLogin={isLogin}
        isOpen={isOpenSideBar}
        user={{
          id: user.id,
          profileImageUrl: user.profileImageUrl,
          nickname: user.nickname,
          level: user.offerLevel
        }}
        onClose={() => setIsOpenSideBar(false)}
      />
      <CommonModal
        buttons={[
          <Styled.KaKaoButton
            key="kakao-button"
            color="kakao"
            icon="kakao"
            size="large"
            onClick={handleClickLogin}>
            카카오로 시작하기
          </Styled.KaKaoButton>
        ]}
        hasLogo
        isOpen={isOpen}
        title={`가격을 제안해보세요\n경매식 중고거래, Offer!`}
        onClose={closeModal}
      />
    </>
  )
}

export { Header }
