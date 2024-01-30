import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult
} from '@tanstack/react-query'
import type { GetPostsRes } from '@apis/post'

export type ProductListProps = {
  postList?: GetPostsRes[]
  hasNextPage?: boolean
  fetchNextPage?(
    options?: FetchNextPageOptions
  ): Promise<
    InfiniteQueryObserverResult<InfiniteData<GetPostsRes, unknown>, Error>
  >
}
