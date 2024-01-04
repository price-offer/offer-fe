import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import type { BuyTabPostListProps, LikePostListProps, PostType } from './types'
import { BuyTabPost } from '@components/shop/Post'
import type { OfferSummary } from '@types'
import { noop } from '@utils'

const isLikedProps = (props: BuyTabPostListProps): props is LikePostListProps =>
  props.activityType === 'like'
const isOfferPost = (post: PostType): post is OfferSummary => 'postId' in post

const BuyTabPostList = (props: BuyTabPostListProps): ReactElement => {
  const getPostId = (post: PostType) =>
    isOfferPost(post) ? post.postId : post.id

  return (
    <ul className={props.className}>
      {props.posts.map((post, index) => {
        return (
          <Fragment key={getPostId(post)}>
            {isOfferPost(post) ? (
              <BuyTabPost
                activityType="offer"
                {...post}
                onClickReadReview={
                  !isLikedProps(props)
                    ? () => props.onClickReadReview(post.review)
                    : noop
                }
                onClickWriteReview={
                  !isLikedProps(props)
                    ? () => props.onClickWriteReview(post)
                    : noop
                }
              />
            ) : (
              <BuyTabPost
                activityType="like"
                {...post}
                onChangeProductLikeStatus={
                  isLikedProps(props) ? props.onChangeProductLikeStatus : noop
                }
              />
            )}
            {index !== props.posts.length - 1 && <Divider size="bold" />}
          </Fragment>
        )
      })}
    </ul>
  )
}

export { BuyTabPostList, BuyTabPostListProps }
