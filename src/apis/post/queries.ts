import type { DefaultError } from '@tanstack/react-query'
import { useMutation, useQuery, useInfiniteQuery } from '@tanstack/react-query'
import {
  getPost,
  getCategories,
  createPost,
  getPosts,
  updatePostTradeStatus
} from './apis'
import type {
  CreatePostReq,
  GetPostsReq,
  GetPostsRes,
  UpdateTradeStatusReq,
  UpdateTradeStatusRes
} from './types'

export const useCreatePostMutation = () =>
  useMutation({
    mutationFn: (param: CreatePostReq) => createPost(param)
  })

export const useGetPostQuery = (id: number) =>
  useQuery({
    queryKey: ['getPost', id],
    queryFn: () => getPost(id)
  })

export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ['getCategories'],
    queryFn: getCategories
  })

export const useGetPostsQuery = (searchOptions: GetPostsReq) =>
  useQuery({
    queryKey: ['posts', searchOptions],
    queryFn: () => getPosts(searchOptions),
    enabled: typeof searchOptions.sellerId === 'number'
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
