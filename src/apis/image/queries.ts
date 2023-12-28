import { useMutation } from '@tanstack/react-query'
import { createUploadImages } from './apis'
import type { CreateUploadImagesReq } from './types'

export const useCreateUploadImagesMutation = () =>
  useMutation({
    mutationFn: (files: CreateUploadImagesReq) => createUploadImages(files)
  })
