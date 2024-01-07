import type { DefaultError } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import { createUploadImages } from './apis'
import type { CreateUploadImagesReq, CreateUploadImagesRes } from './types'

export const useCreateUploadImagesMutation = () =>
  useMutation<CreateUploadImagesRes, DefaultError, CreateUploadImagesReq>({
    mutationFn: files => createUploadImages(files)
  })
