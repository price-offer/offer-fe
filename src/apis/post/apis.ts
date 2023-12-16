import type { GetCategoriesRes, PostReq, PostDataInfoRes } from './types'

import { http } from '@utils/http'

export const getCategories = () =>
  http.get<null, GetCategoriesRes>('/categories')

export const getPostList = (param: PostReq) => {
  return http.get<PostReq, PostDataInfoRes>('/posts', param)
}
