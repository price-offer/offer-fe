import { useQuery } from '@tanstack/react-query'
import { getCategories, getPosts } from './apis'
import type { GetPostsReq } from './types'

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
