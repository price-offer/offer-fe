import type { DefaultError } from '@tanstack/react-query'
import { useMutation, useQuery } from '@tanstack/react-query'
import { createReviews, getReviews, getReviewsCounts } from './apis'
import type { SelectReviewCounts } from './data'
import { initialReviewsCounts, initialReviews } from './data'
import type { CreateReviewReq, CreateReviewRes, GetReviewsReq } from './types'
import type { ReviewCount } from '@types'

export const useGetReviewsCountsQuery = (memberId: number) =>
  useQuery<ReviewCount, Error, SelectReviewCounts>({
    queryKey: ['reviewsCounts', memberId],
    queryFn: async () => getReviewsCounts({ memberId }),
    select: ({ all, seller, buyer }) => ({
      ALL: all,
      SELLER: seller,
      BUYER: buyer
    }),
    enabled: Boolean(memberId),
    initialData: initialReviewsCounts
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
