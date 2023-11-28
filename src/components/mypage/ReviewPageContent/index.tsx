import type { ReactElement, MouseEvent } from 'react'
import { useState } from 'react'
import { Styled } from './styled'
import { Tabs } from '@components/common'
import { ReviewTabArticleList } from '@components/mypage/ArticleList'
import { ProfileBox } from '@components/mypage/ProfileBox'
import { myProfile } from '@mocks/fixture'
import { TRADE_ACTIVITY_TYPE } from '@constants'
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

const ReviewPageContent = (): ReactElement => {
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
      <Styled.ContentWrapper>
        <ProfileBox {...myProfile} />
        <Styled.Divider size="bold" />
        <Styled.UserProductsWrapper>
          <Tabs>
            <Styled.SearchOptionsWrapper>
              <Styled.TabsList>
                {tradeReviewActivityList.map((tradeReviewActivity, index) => {
                  const isCurrent = tabIndex === index

                  return (
                    <Styled.Tab
                      key={tradeReviewActivity[0]}
                      onClick={handleTabClick}>
                      <Styled.StatusButtonLabel>
                        <Styled.Circle isCurrent={isCurrent} />
                        <Styled.StatusButton
                          isCurrent={isCurrent}
                          type="button">
                          <Styled.Text isCurrent={isCurrent}>
                            {tradeReviewActivity[1]}
                          </Styled.Text>
                        </Styled.StatusButton>
                        <Styled.Text color="grayScale50">1</Styled.Text>
                      </Styled.StatusButtonLabel>
                    </Styled.Tab>
                  )
                })}
              </Styled.TabsList>
            </Styled.SearchOptionsWrapper>
            <Styled.ProductListPanels>
              <Tabs.Panel>
                <ReviewTabArticleList reviews={reviews} />
              </Tabs.Panel>
              <Tabs.Panel>
                <ReviewTabArticleList reviews={reviews} />
              </Tabs.Panel>
              <Tabs.Panel>
                <ReviewTabArticleList reviews={reviews} />
              </Tabs.Panel>
            </Styled.ProductListPanels>
          </Tabs>
        </Styled.UserProductsWrapper>
      </Styled.ContentWrapper>
    </div>
  )
}

export { ReviewPageContent }
