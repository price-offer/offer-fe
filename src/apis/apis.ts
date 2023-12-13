import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type {
  Articles,
  MemberProfile,
  MyProfile,
  TradeStatus,
  TradeStatusCodes
} from '@types'

export const getMyProfile = async (): Promise<AxiosResponse<MyProfile>> => {
  const res = await axios.get('/members/mypage')
  return res.data
}

export const getProfile = async (memberId: string): Promise<MemberProfile> => {
  const res = await axios.get(`/members/${memberId}`)
  return res.data
}

export const updateProductTradeStatus = async (
  articleId: string,
  tradeStatus: TradeStatus
): Promise<void> => {
  await axios.patch(`/articles/${articleId}`, {
    tradeStatus
  })
}

export const getOnSaleArticles = async (
  memberId: string,
  tradeStatusCode: TradeStatusCodes
): Promise<Articles> => {
  const res = await axios.get(
    `/articles?memberId=${memberId}&tradeStatusCode=${tradeStatusCode}`
  )
  return res.data
}
