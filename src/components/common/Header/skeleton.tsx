import styled from '@emotion/styled'
import { Avatar, Button, Divider, IconButton } from '@offer-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactElement } from 'react'
import { Styled } from './styled'
import { noop } from '@utils/common'
import { IMAGE } from '@constants'

export const HeaderSkeleton = (): ReactElement => {
  return (
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
          <>
            <Styled.HeaderAuthButton
              styleType="ghost"
              type="button"
              width="76px">
              <Styled.TextLink href="/mypage">나의 거래활동</Styled.TextLink>
            </Styled.HeaderAuthButton>
            <Divider direction="vertical" gap={16} />
            <Styled.HeaderAuthButton styleType="ghost" width="37px">
              <Styled.TextLink href="/messagebox">쪽지함</Styled.TextLink>
            </Styled.HeaderAuthButton>
            <Styled.HeaderProfileSection onClick={noop}>
              <Avatar alt="profile-image" size="xsmall" src="" />
              <StyledSkeletonHeaderNickName />
              <IconButton icon="triangleDown" />
            </Styled.HeaderProfileSection>
          </>
          <Link href="/post">
            <Button size="small" styleType="solidSub">
              판매하기
            </Button>
          </Link>
        </Styled.ButtonSection>
        <Styled.MenuSection>
          <IconButton icon="search" size={24} />
          <IconButton icon="menu" size={24} />
        </Styled.MenuSection>
      </Styled.HeaderContent>
    </Styled.HeaderWrapper>
  )
}

// TODO: Header Layout shift 수정 필요
const StyledSkeletonHeaderNickName = styled(Styled.HeaderNickName)`
  min-width: 100px;
`
