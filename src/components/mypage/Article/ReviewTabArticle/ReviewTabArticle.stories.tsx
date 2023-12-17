import type { Meta, StoryObj } from '@storybook/react'
import { ReviewTabArticle as ReviewTabArticleComponent } from './index'

type ReviewTabArticle = typeof ReviewTabArticleComponent

const meta: Meta<ReviewTabArticle> = {
  component: ReviewTabArticleComponent,
  title: 'MyPage/Article/ReviewTabArticle'
}

export default meta

export const Primary: StoryObj<ReviewTabArticle> = {
  args: {
    // id: 6,
    // reviewer: {
    //   id: 1,
    //   profileImageUrl: '',
    //   nickname: '닉네임',
    //   offerLevel: 1
    // },
    // article: {
    //   id: 1,
    //   title: '거래한 상품의 제목'
    // },
    // score: 2,
    // content: '쿨거래 조아요',
    // isWritingAvailableFromCurrentMember: true,
    // createdDate: '2시간 전'
  },
  render: args => <ReviewTabArticleComponent {...args} />
}
