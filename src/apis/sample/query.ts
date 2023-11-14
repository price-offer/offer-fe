import { useQuery } from '@tanstack/react-query'
import { getSample } from './api'
import type { SampleReq } from './types'

export const useSampleQuery = (param: SampleReq) =>
  useQuery({ queryKey: ['sample'], queryFn: () => getSample(param) })

// usage
// const res = useSampleQuery({id: 1 })
