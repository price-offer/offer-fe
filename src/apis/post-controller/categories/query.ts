import { useQuery } from '@tanstack/react-query'
import { getCategory } from './api'
import type { Category } from './types'
import { IMAGE } from '@constants'

export const useGetCategoryQuery = () =>
  useQuery({
    queryKey: ['category'],
    queryFn: () => getCategory(),
    select: res =>
      res.data.data.map((category: Category) => {
        return {
          ...category,
          imageUrl: IMAGE[`CATEGORY_${category.name}`]
        }
      })
  })
