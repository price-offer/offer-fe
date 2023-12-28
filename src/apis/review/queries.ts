import { useQuery } from '@tanstack/react-query'
// import { getReviews } from './apis'
import type { GetReviewsReq } from './types'
import type { ReviewInfo } from '@types'

export const useGetReviewsQuery = (searchOptions: GetReviewsReq) =>
  useQuery({
    queryKey: ['reviews', searchOptions],
    queryFn: () => {
      const getMockScore = () => {
        if (searchOptions.role === 'ALL') {
          return 0
        } else if (searchOptions.role === 'SELLER') {
          return 1
        }

        return 2
      }

      const mockData: ReviewInfo = [
        {
          id: 0,
          reviewer: {
            id: 0,
            profileImageUrl: 'string',
            nickname: 'string'
          },
          score: getMockScore(),
          post: {
            id: 0,
            title: 'string'
          },
          content: 'string',
          createdDate: '2023-12-28T14:15:45.027Z'
        }
      ]

      return mockData
      // getReviews(searchOptions)
    }
  })
