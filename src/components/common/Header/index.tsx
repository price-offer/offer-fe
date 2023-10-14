import Image from 'next/image'
import type { ReactElement } from 'react'
import { useState } from 'react'
import { LogOutDialog } from './LogOutDialog'
import { Styled } from './styled'
import type {} from './types'
import { IMAGE } from '@constants/images'

const Header = (): ReactElement => {
  const { LOGO } = IMAGE

  const isLogin = true

  const [isOpenLogoutDialog, setIsOpenLogoutDialog] = useState(true)

  return (
    <>
      <Styled.HeaderWrapper>
        <Styled.HeaderContent>
          <Styled.LogoInputSection>
            <Styled.LogoButton styleType="ghost">
              {<Image alt="d" src={LOGO} />}
            </Styled.LogoButton>

            <Styled.SearchInput
              placeholder="검색어를 입력하세요"
              styleType="search"
            />
          </Styled.LogoInputSection>
          <Styled.ButtonSection>
            {isLogin ? (
              <>
                <Styled.HeaderAuthButton styleType="ghost" width="76px">
                  나의 거래활동
                </Styled.HeaderAuthButton>
                <Styled.ButtonDivider direction="vertical" gap={16} />
                <Styled.HeaderAuthButton styleType="ghost" width="37px">
                  쪽지함
                </Styled.HeaderAuthButton>
                <Styled.HeaderProfileSection>
                  <Styled.HeaderAvatar
                    alt="profile-image"
                    size="xsmall"
                    src=""
                  />
                  <Styled.HeaderNickName>부드러운 냉장고</Styled.HeaderNickName>
                  <Styled.LogoutIcon
                    icon="triangleDown"
                    onClick={() => setIsOpenLogoutDialog(!isOpenLogoutDialog)}
                  />
                  <LogOutDialog
                    isOpen={isOpenLogoutDialog}
                    onLogout={() => setIsOpenLogoutDialog(false)}>
                    로그아웃
                  </LogOutDialog>
                </Styled.HeaderProfileSection>
                <Styled.SellButton size="small" styleType="solidSub">
                  판매하기
                </Styled.SellButton>
              </>
            ) : (
              <>
                <Styled.HeaderAuthButton styleType="ghost" width="37px">
                  로그인
                </Styled.HeaderAuthButton>
                <Styled.ButtonDivider direction="vertical" gap={16} />
                <Styled.HeaderAuthButton styleType="ghost" width="50px">
                  회원가입
                </Styled.HeaderAuthButton>
                <Styled.SellButtonDivider />
                <Styled.SellButton size="small" styleType="solidSub">
                  판매하기
                </Styled.SellButton>
              </>
            )}
          </Styled.ButtonSection>
        </Styled.HeaderContent>
      </Styled.HeaderWrapper>
    </>
  )
}

export { Header }
