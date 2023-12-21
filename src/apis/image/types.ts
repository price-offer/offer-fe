import type { ImagesUpload, ImageUpload } from '@types'

export type PostUploadImagesReq = {
  files: string[]
}
export type PostUploadImagesRes = ImagesUpload

export type PostUploadImageReq = {
  file: string
}
export type PostUploadImageRes = ImageUpload

export type GetImageReq = {
  path: string
}
// TODO: 정확한 타입 BE 확인 필요
export type GetImageRes = string[]
