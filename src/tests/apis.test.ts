import {
  getMyProfile,
  getProfile,
  getOnSaleArticles,
  updateProductTradeStatus
} from '@apis'
import { myProfile, memberProfileList, articles } from '@mocks/fixture'
import type { TradeStatus } from '@types'

describe('/apis', async () => {
  it('getMyProfile() - 함수 호출 시, 내 프로필 정보를 받아옵니다.', async () => {
    // Given, When
    const res = await getMyProfile()

    // Then
    expect(res).toStrictEqual(myProfile)
  })

  it('getProfile() - 함수 호출 시, memberId가 1인 사용자의 프로필 정보를 받아옵니다.', async () => {
    // Given
    const memberId = '1'

    // When
    const res = await getProfile(memberId)

    // Then
    expect(res).toStrictEqual(memberProfileList[memberId])
  })

  it('getProfile() - 함수 호출 시, memberId가 2인 사용자의 프로필 정보를 받아옵니다.', async () => {
    // Given
    const memberId = '2'

    // When
    const res = await getProfile(memberId)

    // Then
    expect(res).toStrictEqual(memberProfileList[memberId])
  })

  it('getOnSaleArticles() - 함수 호출 시, 판매자의 판매중인 게시글 목록을 받아옵니다.', async () => {
    // Given
    const memberId = '1'
    const tradeStatusCode = 4

    // When
    const res = await getOnSaleArticles(memberId, tradeStatusCode)

    // Then
    expect(res).toStrictEqual(articles)
  })

  it('updateProductTradeStatus() - 함수 호출 시, articleId가 1인 게시글의 tradeStatus가 거래완료로 변경되어야 합니다.', async () => {
    // Given
    const articleId = '4'
    const tradeStatus: TradeStatus = {
      code: 8,
      name: '거래완료'
    }
    // When
    await updateProductTradeStatus(articleId, tradeStatus)
    const res = articles.elements[0] // API Fixture로 대체중

    // Then
    expect(res.tradeStatus).toStrictEqual(tradeStatus)
  })
})
