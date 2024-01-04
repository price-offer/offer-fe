import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import type { LikePostListProps } from './types'
import { BuyTabPost } from '@components/shop/Post'

const LikeTabPostList = ({
  className,
  posts,
  onChangeProductLikeStatus
}: LikePostListProps): ReactElement => (
  <ul className={className}>
    {posts.map((post, index) => (
      <Fragment key={post.id}>
        <BuyTabPost
          activityType="like"
          {...post}
          onChangeProductLikeStatus={onChangeProductLikeStatus}
        />
        {index !== posts.length - 1 && <Divider size="bold" />}
      </Fragment>
    ))}
  </ul>
)

export { LikeTabPostList, LikePostListProps }
