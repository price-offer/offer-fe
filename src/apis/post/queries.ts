import { useMutation } from '@tanstack/react-query'
import { postProduct } from './apis'
import type { PostProductReq } from './types'

export const usePostProductMutation = () =>
  useMutation({
    mutationFn: (param: PostProductReq) => postProduct(param)
  })
