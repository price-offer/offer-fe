import { useQuery } from '@tanstack/react-query'
import { getCategories } from './apis'

export const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ['getCategories'],
    queryFn: getCategories
  })
