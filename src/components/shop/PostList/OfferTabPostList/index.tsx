import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import type { OfferPostListProps } from './types'
import { BuyTabPost } from '@components/shop/Post'

const OfferTabPostList = ({
  className,
  posts,
  onClickReadReview,
  onClickWriteReview
}: OfferPostListProps): ReactElement => (
  <ul className={className}>
    {posts.map((post, index) => (
      <Fragment key={post.postId}>
        <BuyTabPost
          activityType="offer"
          {...post}
          onClickReadReview={() => onClickReadReview(post.review)}
          onClickWriteReview={() => onClickWriteReview(post)}
        />
        {index !== posts.length - 1 && <Divider size="bold" />}
      </Fragment>
    ))}
  </ul>
)

export { OfferTabPostList, OfferPostListProps }
