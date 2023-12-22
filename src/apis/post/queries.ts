import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getCategories, getPostList } from './apis'
import type { PostReq, PostDataInfoRes } from './types'

export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ['getCategories'],
    queryFn: getCategories
  })

export const useGetPostListQuery = (param: PostReq) =>
  useInfiniteQuery<PostDataInfoRes>({
    queryKey: ['postList'],
    queryFn: () => getPostList(param),
    initialPageParam: null,
    getNextPageParam: lastPage =>
      lastPage?.hasNext
        ? lastPage.posts[lastPage.posts.length - 1].id
        : undefined
  })
