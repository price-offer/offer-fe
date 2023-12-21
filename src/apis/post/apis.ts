import type { GetCategoriesRes, CreatePostReq, CreatePostRes } from './types'
import { http } from '@utils/http'

export const postProduct = (param: CreatePostReq) =>
  http.post<CreatePostReq, CreatePostRes>('/posts', param)

export const getCategories = () =>
  http.get<null, GetCategoriesRes>('/categories')
