import axios from 'axios'
import type { PostReq, PostDataInfo } from './types'

export const getPost = async (param: PostReq): Promise<PostDataInfo> => {
  const res = await axios.get('https://offer-be.kro.kr/api/posts', {
    params: param
  })
  return res.data.data
}
