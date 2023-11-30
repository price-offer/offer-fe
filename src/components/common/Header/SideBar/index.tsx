import { Avatar, Divider, Icon, Badge } from '@offer-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import React from 'react'
import { Styled } from './styled'
import type { SideBarProps, NavDataType } from './types'
import { OAUTH_URL } from '@constants/oauth'

const NAV_DATA: NavDataType = [
  {
    content: '판매하기',
    url: '/post',
    iconType: 'box'
  },
  {
    content: '나의 거래활동',
    url: '/mypage',
    iconType: 'store'
  },
  {
    content: '쪽지함',
    url: '/message',
    iconType: 'message'
  }
]

export const SideBar = ({
  user,
  isOpen,
  isLogin,
  onClose
}: SideBarProps): ReactElement => {
  const router = useRouter()

  const handleClickLogin = () => {
    router.replace(OAUTH_URL.KAKAO)
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
                src={user?.profileImageUrl || ''}
              />
              <>
                {user?.nickname}{' '}
                <Badge colorType="orange">Lv.{user?.level}</Badge>
              </>
            </Styled.SideBarAuthSection>
          ) : (
            <Styled.SideBarLoginButton onClick={handleClickLogin}>
              로그인/회원가입
            </Styled.SideBarLoginButton>
          )}
          <Divider direction="horizontal" gap={16} length="259px" />
          <Styled.SidebarMenuSection>
            {NAV_DATA.map((item, index) => {
              return (
                <Link key={index} href={item.url}>
                  <Styled.SidebarMenu>
                    <Icon size={16} type={item.iconType} />
                    {item.content}
                  </Styled.SidebarMenu>
                </Link>
              )
            })}
          </Styled.SidebarMenuSection>
          <Divider direction="horizontal" gap={16} />
          {isLogin && (
            <Styled.SidebarLogoutButton
              onClick={() => {
                alert('로그아웃')
              }}>
              로그아웃
            </Styled.SidebarLogoutButton>
          )}
        </Styled.SidebarContent>
      </Styled.SideBarWrapper>
    </>
  )
}
