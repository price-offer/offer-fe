import { Avatar, Divider, Icon, Badge } from '@offer-ui/react'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import React from 'react'
import { Styled } from './styled'
import type { SideBarProps, NavDataType } from './types'
import { OAUTH_URL } from '@constants/oauth'
import { useAuth } from '@hooks/useAuth'

const NAV_DATA: NavDataType = [
  {
    content: '판매하기',
    url: '/post',
    iconType: 'box'
  },
  {
    content: '나의 거래활동',
    url: '/shop',
    iconType: 'store'
  },
  {
    content: '쪽지함',
    url: '/messagebox',
    iconType: 'message'
  }
]

export const SideBar = ({ isOpen, onClose }: SideBarProps): ReactElement => {
  const router = useRouter()
  const { handleLogout, user, isLogin } = useAuth()

  const handleClickLogin = () => {
    router.replace(OAUTH_URL.KAKAO)

    onClose()
  }

  const handleClickButton = (url: string) => {
    router.push(url)

    onClose()
  }

  const handleClickLogout = () => {
    handleLogout()

    onClose()
  }

  return (
    <>
      <Styled.SidebarOverlay isOpen={isOpen} onClick={onClose} />
      <Styled.SideBarWrapper isOpen={isOpen}>
        <Styled.SidebarContent>
          {isLogin ? (
            <Styled.SideBarAuthSection>
              <Avatar
                alt="user-profile"
                size="xsmall"
                src={user.profileImageUrl}
              />
              <>
                {user.nickname}
                <Badge colorType="orange">Lv.{user.offerLevel}</Badge>
              </>
            </Styled.SideBarAuthSection>
          ) : (
            <Styled.SideBarLoginButton onClick={handleClickLogin}>
              로그인/회원가입
            </Styled.SideBarLoginButton>
          )}
          <Divider direction="horizontal" gap={16} length="259px" />
          <Styled.SidebarMenuSection>
            {NAV_DATA.map(({ iconType, content, url }) => {
              return (
                <Styled.SidebarMenu
                  key={content}
                  onClick={() => handleClickButton(url)}>
                  <Icon size={16} type={iconType} />
                  {content}
                </Styled.SidebarMenu>
              )
            })}
          </Styled.SidebarMenuSection>
          <Divider direction="horizontal" gap={16} />
          {isLogin && (
            <Styled.SidebarLogoutButton onClick={handleClickLogout}>
              로그아웃
            </Styled.SidebarLogoutButton>
          )}
        </Styled.SidebarContent>
      </Styled.SideBarWrapper>
    </>
  )
}
