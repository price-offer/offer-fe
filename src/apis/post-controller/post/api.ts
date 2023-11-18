import type { AxiosResponse } from 'axios'
import axios from 'axios'
import type { PostReq, PostRes } from './types'

export const getSample = async (
  param: PostReq
): Promise<AxiosResponse<PostRes>> =>
  axios.get(`https://offer-be.kro.kr/api/post?${param}`)
