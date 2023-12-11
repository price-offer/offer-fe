import type { PostProductReq, PostProductRes } from './types'
import { http } from '@utils/http/index'

export const postProduct = (param: PostProductReq) =>
  http.get<PostProductReq, PostProductRes>('/posts', param)
