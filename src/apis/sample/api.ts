import type { SampleReq, SampleRes } from './types'
import { http } from '@utils/http'

export const getSample = (param: SampleReq) =>
  http.get<SampleRes>(`/sample?${param}`)
