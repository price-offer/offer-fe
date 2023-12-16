import type { GetCategoriesRes } from './types'
import { http } from '@utils/http'

export const getCategories = () =>
  http.get<null, GetCategoriesRes>('/categories')
