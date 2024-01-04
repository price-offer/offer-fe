import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import type { LikePostListProps } from './types'
import { LikeTabPost } from '../LikeTabPost'

const LikeTabPostList = ({
  className,
  posts,
  onChangeProductLikeStatus
}: LikePostListProps): ReactElement => (
  <ul className={className}>
    {posts.map((post, index) => (
      <Fragment key={post.id}>
        <LikeTabPost {...post} onChangeLikeStatus={onChangeProductLikeStatus} />
        {index !== posts.length - 1 && <Divider size="bold" />}
      </Fragment>
    ))}
  </ul>
)

export { LikeTabPostList, LikePostListProps }
