import type { PostReq } from '@apis/post-controller/post/types'

export type ProductListProps = {
  filterOption?: Pick<PostReq, 'sort' | 'category' | 'minPrice' | 'maxPrice'>
}
