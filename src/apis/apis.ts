import type { GetCategoriesRes } from './post'
import { http } from '@utils/http'
import type {
  Articles,
  MemberProfile,
  MyProfile,
  TradeStatus,
  TradeStatusCodes
} from '@types'

export const getMyProfile = () => {
  return http.get<null, MyProfile>('/members/mypage')
}

export const getProfile = (memberId: string): Promise<MemberProfile> => {
  return http.get<null, MemberProfile>(`/members/${memberId}`)
}

export const updateProductTradeStatus = (
  articleId: string,
  tradeStatus: TradeStatus
) => {
  return http.patch(`/articles/${articleId}`, {
    tradeStatus
  })
}

export const getOnSaleArticles = (
  memberId: string,
  tradeStatusCode: TradeStatusCodes
) => {
  return http.get<null, Articles>(
    `/articles?memberId=${memberId}&tradeStatusCode=${tradeStatusCode}`
  )
}

export const getCategory = () => {
  return http.get<null, GetCategoriesRes>(
    'https://offer-be.kro.kr/api/categories'
  )
}
