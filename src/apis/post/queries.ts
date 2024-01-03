import { useMutation, useQuery, useInfiniteQuery } from '@tanstack/react-query'
import {
  getPost,
  getCategories,
  createPost,
  getPosts,
  updateTradeStatus,
  deletePost
} from './apis'
import type {
  CreatePostReq,
  DeletePostReq,
  GetPostsReq,
  GetPostsRes,
  UpdateTradeStatusReq
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

export const useGetPostsQuery = (params: GetPostsReq) =>
  useQuery({
    queryKey: ['getPosts'],
    queryFn: () => getPosts(params)
  })

export const useGetInfinitePostsQuery = (params: GetPostsReq) =>
  useInfiniteQuery<GetPostsRes>({
    queryKey: ['getPosts'],
    queryFn: () => getPosts(params),
    initialPageParam: null,
    getNextPageParam: lastPage =>
      lastPage?.hasNext
        ? lastPage.posts[lastPage.posts.length - 1].id
        : undefined
  })

export const useUpdateTradeStatusMutation = (postId: number) =>
  useMutation({
    mutationFn: (params: UpdateTradeStatusReq) =>
      updateTradeStatus(postId, params)
  })

export const useDeletePostMutation = (postId: DeletePostReq) =>
  useMutation({
    mutationFn: () => deletePost(postId)
  })
