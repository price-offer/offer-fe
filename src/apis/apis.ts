import type { GetCategoriesRes } from './post'
import { http } from '@utils/http'
import type {
  Articles,
  MemberProfile,
  MyProfile,
  TradeStatus,
  TradeStatusCodes
} from '@types'

export const getMyProfile = async () => {
  const res = await http.get<null, MyProfile>('/members/mypage')
  return res
}

export const getProfile = async (memberId: string): Promise<MemberProfile> => {
  const res = await http.get<null, MemberProfile>(`/members/${memberId}`)
  return res
}

export const updateProductTradeStatus = async (
  articleId: string,
  tradeStatus: TradeStatus
): Promise<void> => {
  await http.patch(`/articles/${articleId}`, {
    tradeStatus
  })
}

export const getOnSaleArticles = async (
  memberId: string,
  tradeStatusCode: TradeStatusCodes
) => {
  const res = await http.get<null, Articles>(
    `/articles?memberId=${memberId}&tradeStatusCode=${tradeStatusCode}`
  )
  return res
}

export const getCategory = async () => {
  const res = await http.get<null, GetCategoriesRes>(
    'https://offer-be.kro.kr/api/categories'
  )
  return res
}
