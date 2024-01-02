import { useMutation } from '@tanstack/react-query'
import { updateLikeStatus } from './apis'

export const useUpdateLikeStatusMutation = () =>
  useMutation({
    mutationFn: (postId: number) => updateLikeStatus(postId)
  })
