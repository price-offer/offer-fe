import type { AxiosResponse } from 'axios'
import axios from 'axios'
import type { CategoryRes } from './types'

export const getCategory = async (): Promise<AxiosResponse<CategoryRes>> => {
  return axios.get('https://offer-be.kro.kr/api/categories')
}
