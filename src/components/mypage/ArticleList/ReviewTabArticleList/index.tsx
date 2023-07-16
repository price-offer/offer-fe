import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import { ReviewTabArticle } from '@components/mypage/Article'
import type { ReviewsElement } from '@types'

export interface ReviewTabArticleListProps {
  reviews: ReviewsElement[]
  className?: string
}

export const ReviewTabArticleList = ({
  reviews,
  className
}: ReviewTabArticleListProps): ReactElement => {
  return (
    <ul className={className}>
      {reviews.map((review, index) => (
        <Fragment key={review.id}>
          <ReviewTabArticle {...review} />
          {index !== reviews.length - 1 && <Divider />}
        </Fragment>
      ))}
    </ul>
  )
}
