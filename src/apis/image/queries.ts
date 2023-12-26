import { useMutation } from '@tanstack/react-query'
import { postUploadImages } from './apis'

export const useUploadImagesQuery = () =>
  useMutation({
    mutationFn: (files: FormData) => postUploadImages(files)
  })
