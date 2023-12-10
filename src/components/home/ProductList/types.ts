import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult
} from '@tanstack/react-query'
import type { PostReq, PostDataInfo } from '@apis/post-controller/post/types'

export type ProductListProps = {
  postData?: InfiniteData<PostDataInfo, unknown> | undefined
  filterOption?: Pick<PostReq, 'sort' | 'category' | 'minPrice' | 'maxPrice'>
  hasNextPage?: boolean
  fetchNextPage?(
    options?: FetchNextPageOptions | undefined
  ): Promise<
    InfiniteQueryObserverResult<InfiniteData<PostDataInfo, unknown>, Error>
  >
}
