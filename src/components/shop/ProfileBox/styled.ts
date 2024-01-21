import type { Theme } from '@emotion/react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Avatar as AvatarComponent } from '@offer-ui/react'

const Container = styled.div`
  ${({ theme }) => css`
    position: relative;

    width: 276px;
    height: 388px;
    padding: 26px;
    border: 1px solid ${theme.colors.grayScale10};
    border-radius: 8px;

    ${theme.mediaQuery.tablet} {
      width: 100%;
      height: auto;
      padding: 20px 24px;
      border: none;
    }

    ${theme.mediaQuery.mobile} {
      padding: 20px 16px;
    }
  `}
`
const SettingsButton = styled.button`
  ${({ theme }) => css`
    float: right;

    margin-top: -6px;
    border: none;

    background: none;

    cursor: pointer;

    ${theme.mediaQuery.tablet} {
      margin-top: 0;
    }
  `}
`

const ProfileWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 28px;

    ${theme.mediaQuery.tablet} {
      margin-top: 0;
    }
  `}
`
const Avatar = styled(AvatarComponent)`
  ${({ theme }) => css`
    ${theme.avatar.medium};

    ${theme.mediaQuery.tablet} {
      ${theme.avatar.small};
    }
  `}
`
const UserWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 24px;

    ${theme.mediaQuery.tablet} {
      flex-direction: row;
      align-items: flex-start;

      margin-bottom: 16px;
    }
  `}
`
const NickNameRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;

    margin-top: 14px;

    ${theme.mediaQuery.tablet} {
      align-items: flex-start;

      margin-top: 0;
      margin-left: 12px;
    }
  `}
`
const NickName = styled.span`
  ${({ theme }) => css`
    overflow: hidden;
    ${theme.fonts.headline02B};
    width: 180px;

    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;

    ${theme.mediaQuery.tablet} {
      text-align: left;
      ${theme.fonts.subtitle01B};
    }

    ${theme.mediaQuery.mobile} {
      width: 160px;
    }
  `}
`
const UserProductWrapper = styled.div<{ isLogin: boolean }>`
  ${({ theme, isLogin }) => css`
    display: grid;
    gap: 16px;

    padding: 16px 20px;

    background-color: ${theme.colors.bgGray01};

    ${theme.mediaQuery.tablet} {
      ${isLogin
        ? 'grid-template-columns: 1fr 1fr 1fr 1fr;'
        : 'grid-template-areas: ". sell sold review .";'}

      gap: 93px;

      min-width: 684px;
      padding: 24px 40px;
    }

    ${theme.mediaQuery.mobile} {
      grid-template-areas: none;
      grid-template-columns: 1fr 1fr;
      gap: 44px;

      min-width: 300px;
      padding: 20px 36px;
    }
  `}
`

const setStyleByToken = (theme: Theme, isLogin: boolean) => {
  if (isLogin) {
    return css`
      ${theme.mediaQuery.mobile} {
        min-width: 90px;
      }
    `
  }

  return css`
    ${theme.mediaQuery.desktop} {
      :nth-of-type(1),
      :nth-of-type(2),
      :nth-of-type(3) {
        grid-area: auto;
      }
    }

    ${theme.mediaQuery.tablet} {
      :nth-of-type(1) {
        grid-area: sold;
      }

      :nth-of-type(2) {
        grid-area: sell;
      }

      :nth-of-type(3) {
        grid-area: review;
      }
    }

    ${theme.mediaQuery.mobile} {
      min-width: 90px;

      :nth-of-type(1),
      :nth-of-type(2),
      :nth-of-type(3) {
        grid-area: auto;
      }
    }
  `
}
const UserProductRow = styled.div<{ isLogin: boolean }>`
  ${({ theme, isLogin }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${theme.mediaQuery.tablet} {
      min-width: 85px;
    }

    ${setStyleByToken(theme, isLogin)}
  `}
`
const UserProductTitleWrapper = styled.p`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const Styled = {
  Container,
  SettingsButton,
  ProfileWrapper,
  Avatar,
  UserWrapper,
  NickNameRow,
  NickName,
  UserProductWrapper,
  UserProductRow,
  UserProductTitleWrapper
}
