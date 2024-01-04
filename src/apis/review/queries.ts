import type { DefaultError } from '@tanstack/react-query'
import { useMutation, useQuery } from '@tanstack/react-query'
import { createReviews, getReviews } from './apis'
import { initialAllReviewLengths, initialReviews } from './data'
import type { CreateReviewReq, CreateReviewRes, GetReviewsReq } from './types'

// 리뷰 갯수 조회 api 임시 대체
export const useGetReviewsLengthQuery = (memberId: number) =>
  useQuery({
    queryKey: ['allReviews', memberId],
    queryFn: async () => {
      const searchOptions = {
        memberId,
        lastId: 0,
        limit: 100
      }

      const all = await getReviews({ ...searchOptions, role: 'ALL' })
      const buyer = await getReviews({ ...searchOptions, role: 'BUYER' })
      const seller = await getReviews({ ...searchOptions, role: 'SELLER' })

      return {
        ALL: all.reviews.length,
        BUYER: buyer.reviews.length,
        SELLER: seller.reviews.length
      }
    },
    enabled: Boolean(memberId),
    initialData: initialAllReviewLengths
  })

export const useGetReviewsQuery = (searchOptions: GetReviewsReq) =>
  useQuery({
    queryKey: ['reviews', searchOptions],
    queryFn: async () => getReviews({ ...searchOptions }),
    enabled: Boolean(searchOptions.memberId),
    initialData: initialReviews
  })

export const useReviewsMutation = () =>
  useMutation<CreateReviewRes, DefaultError, CreateReviewReq>({
    mutationFn: payload => createReviews(payload)
  })
