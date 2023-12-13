import type { GetPostDetailRes, GetCategoriesRes } from './types'
import { http } from '@utils/http'

export const getPostDetail = (id: number) =>
  http.get<null, GetPostDetailRes>(`/posts/${id}`)

export const getCategories = () =>
  http.get<null, GetCategoriesRes>('/categories')
