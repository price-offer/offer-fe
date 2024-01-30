import type { InfiniteData, DefaultError } from '@tanstack/react-query'
import { useMutation, useQuery, useInfiniteQuery } from '@tanstack/react-query'
import {
  getPost,
  getCategories,
  createPost,
  getPosts,
  updatePostTradeStatus,
  deletePost,
  updatePost
} from './apis'
import type {
  CreatePostReq,
  DeletePostReq,
  GetPostsReq,
  GetPostsRes,
  UpdatePostReq,
  UpdateTradeStatusReq
} from './types'
import type { PostSummaries } from '@types'

export const useCreatePostMutation = () =>
  useMutation({
    mutationFn: (param: CreatePostReq) => createPost(param)
  })

export const useUpdatePostMutation = () =>
  useMutation({
    mutationFn: (params: UpdatePostReq) => updatePost(params)
  })

export const useGetPostQuery = (id: number) =>
  useQuery({
    queryKey: ['getPost', id],
    queryFn: () => getPost(id),
    retry: false,
    enabled: typeof id === 'number',
    select: data => ({
      ...data,
      postForm: {
        category: data.category.code,
        tradeType: data.tradeType.code,
        productCondition: data.productCondition.code,
        price: String(data.price),
        imageInfos: [
          {
            id: '0',
            isRepresent: true,
            url: data.thumbnailImageUrl || ''
          },
          ...(data.imageUrls.map((url, idx) => ({
            id: String(idx + 1),
            url
          })) || [])
        ],
        title: data.title,
        description: data.description,
        location: data.location
      },
      postImages: [
        {
          id: 0,
          src: data.thumbnailImageUrl || ''
        },
        ...(data.imageUrls.map((url, idx) => ({
          id: idx + 1,
          src: url
        })) || [])
      ]
    })
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

export const useGetInfinitePostsQuery = ({
  limit = 8,
  ...params
}: GetPostsReq) =>
  useInfiniteQuery<
    GetPostsRes,
    DefaultError,
    InfiniteData<PostSummaries, unknown> & { totalPage: number }
  >({
    queryKey: ['getInfinitePosts', params],
    queryFn: ({ pageParam }) =>
      getPosts({ ...params, limit, lastId: pageParam as number }),
    initialPageParam: null,
    getNextPageParam: lastPage =>
      lastPage?.hasNext ? lastPage.posts.at(-1)?.id : undefined,
    select: data => ({
      ...data,
      totalPage: data.pages[0].totalCount || 0
    })
  })

export const useUpdateTradeStatusMutation = () =>
  useMutation({
    mutationFn: (params: UpdateTradeStatusReq) => updatePostTradeStatus(params)
  })

export const useDeletePostMutation = (postId: DeletePostReq) =>
  useMutation({
    mutationFn: () => deletePost(postId)
  })
