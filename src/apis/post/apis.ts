import type { GetCategoriesRes } from './types'
import { http } from '@utils/http'

export const getCategories = () =>
  http.post<null, GetCategoriesRes>('/categories')
