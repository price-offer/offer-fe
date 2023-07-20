import styled from '@emotion/styled'
import type { ColorKeys } from '@offer-ui/react'
import { Divider } from '@offer-ui/react'
import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import { ProfileBox, Tabs, Tab, ReviewTabArticleList } from '@components'
import { TRADE_ACTIVITY_TYPE } from '@constants'
import { myProfile } from '@mocks/fixture'
import type { ReviewsElement } from '@types'

const tradeReviewActivityList = Object.entries(TRADE_ACTIVITY_TYPE.review)

const getReviews = (): ReviewsElement[] => {
  return Array.from({ length: 10 }, () => 0).map((_, index) => {
    return {
      id: index,
      reviewer: {
        id: 1,
        profileImageUrl: '',
        nickname: '닉네임',
        offerLevel: 1
      },
      article: {
        id: 1,
        title: '거래한 상품의 제목'
      },
      score: 2,
      content: '너무 좋습니다!',
      isWritingAvailableFromCurrentMember: true,
      createdDate: '2시간 전'
    }
  })
}

export const ReviewPageContent = (): ReactElement => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const [reviews] = useState<ReviewsElement[]>(getReviews())

  const handleTabClick = (
    e: MouseEvent<HTMLDivElement>,
    index: number
  ): void => {
    setTabIndex(index)
  }

  return (
    <div>
      <StyledContentWrapper>
        <ProfileBox {...myProfile} />
        <StyledDivider size="bold" />
        <StyledUserProductsWrapper>
          <Tabs>
            <StyledSearchOptionsWrapper>
              <StyledTabsList>
                {tradeReviewActivityList.map((tradeReviewActivity, index) => {
                  const isCurrent = tabIndex === index

                  return (
                    <StyledTab
                      key={tradeReviewActivity[0]}
                      onClick={handleTabClick}>
                      <StyledStatusButtonLabel>
                        <StyledCircle isCurrent={isCurrent} />
                        <StyledStatusButton isCurrent={isCurrent} type="button">
                          <StyledText isCurrent={isCurrent}>
                            {tradeReviewActivity[1]}
                          </StyledText>
                        </StyledStatusButton>
                        <StyledText color="grayScale50">1</StyledText>
                      </StyledStatusButtonLabel>
                    </StyledTab>
                  )
                })}
              </StyledTabsList>
            </StyledSearchOptionsWrapper>
            <StyledProductListPanels>
              <Tabs.Panel>
                <ReviewTabArticleList reviews={reviews} />
              </Tabs.Panel>
              <Tabs.Panel>
                <ReviewTabArticleList reviews={reviews} />
              </Tabs.Panel>
              <Tabs.Panel>
                <ReviewTabArticleList reviews={reviews} />
              </Tabs.Panel>
            </StyledProductListPanels>
          </Tabs>
        </StyledUserProductsWrapper>
      </StyledContentWrapper>
    </div>
  )
}

const StyledContentWrapper = styled.div`
  ${({ theme }): string => `
    display: flex;
    gap: 32px;

    ${theme.mediaQuery.tablet} {
      position: relative;
      flex-direction: column;
      gap: 0;
    }
  `}
`
const StyledSearchOptionsWrapper = styled.div`
  ${({ theme }): string => `
    padding: 20px;
    border-bottom: 1px solid ${theme.colors.grayScale10};

    ${theme.mediaQuery.tablet} {
      padding: 16px;
    }
  `}
`
const StyledTabsList = styled(Tabs.List)`
  display: flex;
  gap: 22px;
`
const StyledTab = styled(Tab)`
  border: none;

  background: transparent;
`
const StyledStatusButtonLabel = styled.label`
  display: flex;
  align-items: center;

  cursor: pointer;
`
const StyledCircle = styled.span<{ isCurrent: boolean }>`
  ${({ theme, isCurrent }): string => `
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background-color: ${
      isCurrent ? theme.colors.brandPrimary : theme.colors.grayScale50
    };
  `}
`
const StyledStatusButton = styled.button<{ isCurrent: boolean }>`
  ${({ theme }): string => `
    border: none;
    background: transparent;
    padding: 0;
    margin: 0 4px 0 8px;
    cursor: pointer;

    ${theme.mediaQuery.tablet} {
      margin: 0 4px;
    }
  `}
`
const StyledText = styled.span<{ isCurrent?: boolean; color?: ColorKeys }>`
  ${({ theme, isCurrent, color }): string => `
    ${theme.fonts.subtitle01B};
    color: ${
      color
        ? theme.colors[color]
        : isCurrent
        ? theme.colors.black
        : theme.colors.grayScale50
    };

    ${theme.mediaQuery.tablet} {
      ${theme.fonts.body02B};
    }
  `}
`
const StyledUserProductsWrapper = styled.div`
  ${({ theme }): string => `
    width: 892px;
    height: 855px;
    border: 1px solid ${theme.colors.grayScale10};
    border-bottom: none;

    ${theme.mediaQuery.tablet} {
      width: auto;
      border: none;
    }
  `}
`
const StyledProductListPanels = styled(Tabs.Panels)`
  ${({ theme }): string => `
    height: 780px;
    overflow-y: scroll;

    ${theme.mediaQuery.tablet} {
      height: auto;
      overflow-y: unset;
    }
  `}
`
const StyledDivider = styled(Divider)`
  ${({ theme }): string => `
    display: none;

    ${theme.mediaQuery.tablet} {
      display: block;
    }
  `}
`
