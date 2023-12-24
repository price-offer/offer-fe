import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult
} from '@tanstack/react-query'
import type { GetPostsReq, GetPostsRes } from '@apis/post'

export type ProductListProps = {
  postData?: GetPostsRes[]
  filterOption?: Pick<
    GetPostsReq,
    'sort' | 'category' | 'minPrice' | 'maxPrice'
  >
  hasNextPage?: boolean
  fetchNextPage?(
    options?: FetchNextPageOptions
  ): Promise<
    InfiniteQueryObserverResult<InfiniteData<GetPostsRes, unknown>, Error>
  >
}
