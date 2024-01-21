import type {
  GetCategoriesRes,
  GetPostsReq,
  GetPostsRes,
  GetPostRes,
  CreatePostReq,
  CreatePostRes,
  UpdateTradeStatusReq,
  UpdateTradeStatusRes,
  DeletePostReq,
  DeletePostRes,
  UpdatePostReq,
  UpdatePostRes
} from './types'
import { http } from '@utils/http'

export const getPost = (id: number) =>
  http.get<null, GetPostRes>(`/posts/${id}`)

export const createPost = (param: CreatePostReq) =>
  http.post<CreatePostReq, CreatePostRes>('/posts', param)

export const updatePost = ({ postId, ...params }: UpdatePostReq) =>
  http.put<Omit<UpdatePostReq, 'postId'>, UpdatePostRes>(
    `/posts/${postId}`,
    params
  )

export const getCategories = () =>
  http.get<null, GetCategoriesRes>('/categories')

export const getPosts = (params: GetPostsReq) =>
  http.get<GetPostsReq, GetPostsRes>('/posts', params)

export const updatePostTradeStatus = ({
  postId,
  ...params
}: UpdateTradeStatusReq) =>
  http.put<Omit<UpdateTradeStatusReq, 'postId'>, UpdateTradeStatusRes>(
    `/posts/trade-status/${postId}`,
    params
  )

export const deletePost = (postId: DeletePostReq) =>
  http.delete<DeletePostRes>(`/posts/${postId}`)
