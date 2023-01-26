import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import { ReviewTypeArticle } from '@components/mypage/Article'
import type { ReviewsElement } from '@types'

export interface ReviewTypeArticleListProps {
  reviews: ReviewsElement[]
  className?: string
}

export const ReviewTypeArticleList = ({
  reviews,
  className
}: ReviewTypeArticleListProps): ReactElement => {
  return (
    <ul className={className}>
      {reviews.map((review, index) => (
        <Fragment key={review.id}>
          <ReviewTypeArticle {...review} />
          {index !== reviews.length - 1 && <Divider />}
        </Fragment>
      ))}
    </ul>
  )
}
