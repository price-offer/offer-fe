import { useMutation } from '@tanstack/react-query'
import { putPostLike } from './apis'

export const usePutPostLikeMutation = () =>
  useMutation({
    mutationFn: (postId: number) => putPostLike(postId)
  })
