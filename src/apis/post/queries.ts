import { useQuery } from '@tanstack/react-query'
import { getPostDetail, getCategories } from './apis'

export const useGetPostDetailQuery = (id: number) =>
  useQuery({
    queryKey: ['getPostDetail', id],
    queryFn: () => getPostDetail(id)
  })

export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ['getCategories'],
    queryFn: getCategories
  })
