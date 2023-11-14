import type { SampleReq, SampleRes } from './types'
import { http } from '@utils/http/index'

export const getSample = (param: SampleReq) =>
  http.get<SampleReq, SampleRes>(`/sample`, param)
