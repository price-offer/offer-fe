import type { GetCategoriesRes, GetPostsReq, GetPostsRes } from './types'
import { http } from '@utils/http'

export const getCategories = () =>
  http.get<null, GetCategoriesRes>('/categories')

export const getPosts = (params: GetPostsReq) =>
  http.get<GetPostsReq, GetPostsRes>('/posts', params)
