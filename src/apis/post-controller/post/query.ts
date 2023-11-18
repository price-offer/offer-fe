import { atom, useAtom } from 'jotai'
import { atomsWithQuery } from 'jotai-tanstack-query'
import { getSample } from './api'
import type { PostReq } from './types'

export const postIdAtom = atom<PostReq>({
  sort: '',
  tradeType: 'TRADE_TYPE__ALL',
  category: '',
  minPrice: 0,
  maxPrice: 0,
  lastId: 0,
  limit: 0
})

const [useGetPostListAtom] = atomsWithQuery(get => ({
  queryKey: ['post', get(postIdAtom)],
  queryFn: async ({ queryKey: [, param] }) => {
    const payload = param
    const res = await getSample(payload as PostReq)

    return res
  }
}))

export const useGetPostQuery = () => useAtom(useGetPostListAtom)
