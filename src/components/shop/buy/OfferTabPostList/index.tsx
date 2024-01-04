import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import type { OfferPostListProps } from './types'
import { OfferTabPost } from '../OfferTabPost'

const OfferTabPostList = ({
  className,
  posts,
  onClickReadReview,
  onClickWriteReview
}: OfferPostListProps): ReactElement => (
  <ul className={className}>
    {posts.map((post, index) => (
      <Fragment key={post.postId}>
        <OfferTabPost
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
