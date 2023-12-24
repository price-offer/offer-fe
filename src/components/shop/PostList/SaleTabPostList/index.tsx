import { Divider } from '@offer-ui/react'
import type { ReactElement } from 'react'
import { Fragment } from 'react'
import type { SaleTabPostListProps } from './types'
import { SaleTabPost } from '@components/shop/Post'

const SaleTabPostList = ({
  posts,
  hasToken,
  onChangeTradeStatus,
  className
}: SaleTabPostListProps): ReactElement => {
  return (
    <ul className={className}>
      {posts.map((post, index) => (
        <Fragment key={post.id}>
          <SaleTabPost
            {...post}
            hasToken={hasToken}
            onChangeTradeStatus={onChangeTradeStatus}
          />
          {index !== posts.length - 1 && <Divider size="bold" />}
        </Fragment>
      ))}
    </ul>
  )
}

export { SaleTabPostList, SaleTabPostListProps }
