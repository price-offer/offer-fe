import type { DefaultError } from '@tanstack/react-query'
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query'
import { getCategories, getPosts, updatePostTradeStatus } from './apis'
import type {
  GetPostsReq,
  GetPostsRes,
  UpdateTradeStatusReq,
  UpdateTradeStatusRes
} from './types'

export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ['getCategories'],
    queryFn: getCategories
  })

export const useGetPostsQuery = (searchOptions: GetPostsReq) =>
  useQuery({
    queryKey: ['posts', searchOptions],
    queryFn: () => getPosts(searchOptions)
  })

export const useGetInfinitePostsQuery = (params: GetPostsReq) =>
  useInfiniteQuery<GetPostsRes>({
    queryKey: ['infinitePosts'],
    queryFn: () => getPosts(params),
    initialPageParam: null,
    getNextPageParam: lastPage =>
      lastPage?.hasNext
        ? lastPage.posts[lastPage.posts.length - 1].id
        : undefined
  })

export const usePostTradeStatusMutation = () =>
  useMutation<UpdateTradeStatusRes, DefaultError, UpdateTradeStatusReq>({
    mutationFn: params => updatePostTradeStatus(params)
  })
