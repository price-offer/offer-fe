import { useMutation, useQuery } from '@tanstack/react-query'
import { getCategories, postProduct } from './apis'
import type { CreatePostReq } from './types'

export const usePostProductMutation = () =>
  useMutation({
    mutationFn: (param: CreatePostReq) => postProduct(param)
  })

export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ['getCategories'],
    queryFn: getCategories
  })
