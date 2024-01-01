import type {
  GetCategoriesRes,
  GetPostsReq,
  GetPostsRes,
  GetSortOptionsReq,
  GetPostRes,
  CreatePostReq,
  CreatePostRes
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

export const getSortOption = (params: GetSortOptionsReq) =>
  http.get<GetSortOptionsReq, GetPostsRes>(`/sorts?type=${params.type}`)
