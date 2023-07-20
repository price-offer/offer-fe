import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import {
  StyledContentWrapper,
  StyledSearchOptionsWrapper,
  StyledTabsList,
  StyledTab,
  StyledStatusButtonLabel,
  StyledCircle,
  StyledStatusButton,
  StyledText,
  StyledUserProductsWrapper,
  StyledProductListPanels,
  StyledDivider
} from './styled'
import { ProfileBox, Tabs, ReviewTabArticleList } from '@components'
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
