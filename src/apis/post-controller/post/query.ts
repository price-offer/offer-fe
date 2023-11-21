import { useInfiniteQuery } from '@tanstack/react-query'
import { getPost } from './api'
import type { PostReq, PostDataInfo } from './types'

export const useGetPostListQuery = (param: PostReq) =>
  useInfiniteQuery<PostDataInfo>({
    queryKey: ['postlist'],
    queryFn: async context => {
      const pageParam = context.pageParam as number | null
      const params: PostReq = {
        ...param,
        lastId: pageParam // 마지막 게시물의 ID
      }

      const response = await getPost(params)
      return response
    },
    initialPageParam: null,
    getNextPageParam: lastPage =>
      lastPage?.hasNext
        ? lastPage.posts[lastPage.posts.length - 1].id
        : undefined
  })
