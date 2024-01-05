import type {
  CreateUploadImagesReq,
  CreateUploadImagesRes,
  PostUploadImageReq,
  PostUploadImageRes
} from './types'
import { http } from '@utils/http'

export const createUploadImages = (files: CreateUploadImagesReq) =>
  http.post<CreateUploadImagesReq, CreateUploadImagesRes>(
    '/upload-images',
    files
  )

export const postUploadImage = (payload: PostUploadImageReq) =>
  http.post<PostUploadImageReq, PostUploadImageRes>('/upload-image', payload)
