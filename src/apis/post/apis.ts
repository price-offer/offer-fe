import type { GetPostDetailRes } from './types'
import { http } from '@utils/http'

export const getPostDetail = (id: number) =>
  http.get<null, GetPostDetailRes>(`/posts/${id}`)
