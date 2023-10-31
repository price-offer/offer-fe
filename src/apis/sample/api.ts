import type { AxiosResponse } from 'axios'
import axios from 'axios'
import type { SampleReq, SampleRes } from './types'

export const getSample = async (
  param: SampleReq
): Promise<AxiosResponse<SampleRes>> => axios.get(`/sample?${param}`)
