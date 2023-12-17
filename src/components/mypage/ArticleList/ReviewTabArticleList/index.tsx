// import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
// import { Fragment } from 'react'
import type { ReviewTabArticleListProps } from './types'
// import { ReviewTabArticle } from '@components/mypage/Article'

const ReviewTabArticleList = ({
  // reviews,
  className
}: ReviewTabArticleListProps): ReactElement => {
  return (
    <ul className={className}>
      {/* {reviews.map((review, index) => (
        <Fragment key={review.id}>
          <ReviewTabArticle {...review} />
          {index !== reviews.length - 1 && <Divider />}
        </Fragment>
      ))} */}
    </ul>
  )
}

export { ReviewTabArticleList, ReviewTabArticleListProps }
