import type { ImagesUpload } from '@types'

export type CreateUploadImagesReq = FormData

export type CreateUploadImagesRes = ImagesUpload

export type GetImageReq = {
  path: string
}
// TODO: 정확한 타입 BE 확인 필요
export type GetImageRes = string[]
