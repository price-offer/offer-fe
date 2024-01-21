import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import type { ReviewTabPostListProps } from './types'
import { ReviewTabPost } from '../ReviewTabPost'

const ReviewTabPostList = ({
  reviews,
  className
}: ReviewTabPostListProps): ReactElement => {
  return (
    <ul className={className}>
      {reviews.map((review, index) => (
        <Fragment key={review.id}>
          <ReviewTabPost {...review} />
          {index !== reviews.length - 1 && <Divider />}
        </Fragment>
      ))}
    </ul>
  )
}

export { ReviewTabPostList, ReviewTabPostListProps }
