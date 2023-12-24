import type {
  GetCategoriesRes,
  GetPostsReq,
  GetPostsRes,
  GetSortOptionsReq
} from './types'
import { http } from '@utils/http'

export const getCategories = () =>
  http.get<null, GetCategoriesRes>('/categories')

export const getPosts = (params: GetPostsReq) =>
  http.get<GetPostsReq, GetPostsRes>('/posts', params)

export const getSortOption = (params: GetSortOptionsReq) =>
  http.get<GetSortOptionsReq, GetPostsRes>(`/sorts?type=${params.type}`)
