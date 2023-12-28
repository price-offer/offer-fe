import type { Theme } from '@emotion/react'
import styled from '@emotion/styled'
import { Avatar as AvatarComponent } from '@offer-ui/react'

const Container = styled.div`
  ${({ theme }): string => `
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
  ${({ theme }): string => `
    float: right;
    cursor: pointer;
    border: none;
    background: none;
    margin-top: -6px;

    ${theme.mediaQuery.tablet} {
      margin-top: 0;
    }
  `}
`

const ProfileWrapper = styled.div`
  ${({ theme }): string => `
    margin-top: 28px;

    ${theme.mediaQuery.tablet} {
      margin-top: 0;
    }
  `}
`
const Avatar = styled(AvatarComponent)`
  ${({ theme }): string => `
    ${theme.avatar.medium};

    ${theme.mediaQuery.tablet} {
      ${theme.avatar.small};
    }
  `}
`
const UserWrapper = styled.div`
  ${({ theme }): string => `
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
  ${({ theme }): string => `
  display: flex;
  gap: 4px;
  flex-direction: column;
  margin-top: 14px;
  align-items: center;

  ${theme.mediaQuery.tablet} {
    margin-top: 0;
    margin-left: 12px;
    align-items: flex-start;
  }
`}
`
const NickName = styled.span`
  ${({ theme }): string => `
    ${theme.fonts.headline02B};
    width: 180px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
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
const UserProductWrapper = styled.div<{ hasToken: boolean }>`
  ${({ theme, hasToken }): string => `
    display: grid;
    background-color: ${theme.colors.bgGray01};
    gap: 16px;
    padding: 16px 20px;

    ${theme.mediaQuery.tablet} {
      ${
        hasToken
          ? 'grid-template-columns: 1fr 1fr 1fr 1fr;'
          : 'grid-template-areas: ". sell sold review .";'
      }

      gap: 93px;
      padding: 24px 40px;
      min-width: 684px;
    }

    ${theme.mediaQuery.mobile} {
      grid-template-columns: 1fr 1fr;
      grid-template-areas: none;
      gap: 44px;
      min-width: 300px;
      padding: 20px 36px;
    }
  `}
`

const setStyleByToken = (theme: Theme, hasToken: boolean) => {
  if (hasToken) {
    return `
      ${theme.mediaQuery.mobile} {
        min-width: 90px;
      }
    `
  }

  return `
    ${theme.mediaQuery.desktop} {
      :nth-of-type(1) {
        grid-area: auto;
      }
      :nth-of-type(2) {
        grid-area: auto;
      }
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
      :nth-of-type(4) {
        display: none;
      }
    }

    ${theme.mediaQuery.mobile} {
      min-width: 90px;
      :nth-of-type(1) {
        grid-area: auto;
      }
      :nth-of-type(2) {
        grid-area: auto;
      }
      :nth-of-type(3) {
        grid-area: auto;
      }
    }
  }
  `
}
const UserProductRow = styled.div<{ hasToken: boolean }>`
  ${({ theme, hasToken }) => `
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${theme.mediaQuery.tablet} {
      min-width: 85px;
    }

    ${setStyleByToken(theme, hasToken)}
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
