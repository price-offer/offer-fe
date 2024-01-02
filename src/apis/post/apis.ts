import type {
  GetCategoriesRes,
  GetPostRes,
  CreatePostReq,
  CreatePostRes,
  GetPostsReq,
  GetPostsRes
} from './types'
import { http } from '@utils/http'

export const getPost = (id: number) =>
  http.get<null, GetPostRes>(`/posts/${id}`)

export const createPost = (param: CreatePostReq) =>
  http.post<CreatePostReq, CreatePostRes>('/posts', param)

export const getCategories = () =>
  http.get<null, GetCategoriesRes>('/categories')

export const getPosts = (params: GetPostsReq) =>
  http.get<GetPostsReq, GetPostsRes>('/posts', params)
