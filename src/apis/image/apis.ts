import type { CreateUploadImagesReq, CreateUploadImagesRes } from './types'
import { http } from '@utils/http'

export const createUploadImages = (files: CreateUploadImagesReq) =>
  http.post<CreateUploadImagesReq, CreateUploadImagesRes>(
    '/upload-images',
    files
  )
