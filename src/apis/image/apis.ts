import type { PostUploadImagesRes } from './types'
import { http } from '@utils/http'

export const postUploadImages = (files: FormData) =>
  http.post<FormData, PostUploadImagesRes>('/upload-images', files)
