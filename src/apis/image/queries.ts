import type { DefaultError } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { createUploadImages, postUploadImage } from './apis'
import type {
  CreateUploadImagesReq,
  CreateUploadImagesRes,
  PostUploadImageRes,
  PostUploadImageReq
} from './types'

export const useCreateUploadImagesMutation = () =>
  useMutation<CreateUploadImagesRes, DefaultError, CreateUploadImagesReq>({
    mutationFn: files => createUploadImages(files)
  })

export const usePostUploadImageMutation = () =>
  useMutation<PostUploadImageRes, DefaultError, PostUploadImageReq>({
    mutationFn: formData => postUploadImage(formData)
  })
