import type { GetPostRes, GetCategoriesRes } from './types'
import { http } from '@utils/http'

export const getPostDetail = (id: number) =>
  http.get<null, GetPostRes>(`/posts/${id}`)

export const getCategories = () =>
  http.get<null, GetCategoriesRes>('/categories')
