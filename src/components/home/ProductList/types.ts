import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult
} from '@tanstack/react-query'
import type { PostReq, PostDataInfoRes } from '@apis/post'

export type ProductListProps = {
  postData?: PostDataInfoRes[]
  filterOption?: Pick<PostReq, 'sort' | 'category' | 'minPrice' | 'maxPrice'>
  hasNextPage?: boolean
  fetchNextPage?(
    options?: FetchNextPageOptions
  ): Promise<
    InfiniteQueryObserverResult<InfiniteData<PostDataInfoRes, unknown>, Error>
  >
}
