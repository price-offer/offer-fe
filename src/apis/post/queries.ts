import { useMutation, useQuery } from '@tanstack/react-query'
import { getCategories, postProduct } from './apis'
import type { PostProductReq } from './types'

export const usePostProductMutation = () =>
  useMutation({
    mutationFn: (param: PostProductReq) => postProduct(param)
  })

export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ['getCategories'],
    queryFn: getCategories,
    select: res => res.data
  })
