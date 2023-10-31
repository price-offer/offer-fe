import { atom, useAtom } from 'jotai'
import { atomsWithQuery } from 'jotai-tanstack-query'
import { getSample } from './api'
import type { SampleReq } from './types'

export const sampleIdAtom = atom<SampleReq>({ id: 1 })

const [useGetSampleAtom] = atomsWithQuery(get => ({
  queryKey: ['sample', get(sampleIdAtom)],
  queryFn: async ({ queryKey: [, param] }) => {
    const payload = param
    const res = await getSample(payload as SampleReq)

    return res
  }
}))

export const useSampleQuery = () => useAtom(useGetSampleAtom)

// usage
// const [data] = useSampleQuery()
