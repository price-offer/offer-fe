import type { GetCategoriesRes, PostProductReq, PostProductRes } from './types'
import { http } from '@utils/http'

export const postProduct = (param: PostProductReq) =>
  http.post<PostProductReq, PostProductRes>('/posts', param)

export const getCategories = () =>
  http.get<null, GetCategoriesRes>('/categories')
