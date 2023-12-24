import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getCategories, getPosts, getSortOption } from './apis'
import type { GetPostsReq, GetPostsRes, GetSortOptionsReq } from './types'

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
    refetchOnMount: 'always',
    initialPageParam: null,
    getNextPageParam: lastPage =>
      lastPage?.hasNext
        ? lastPage.posts[lastPage.posts.length - 1].id
        : undefined
  })

export const useGetSortOptions = (params: GetSortOptionsReq) =>
  useQuery({
    queryKey: ['getSortOption'],
    queryFn: () => getSortOption(params)
  })
