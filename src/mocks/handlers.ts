import { http, HttpResponse } from 'msw'
import { myProfile, memberProfileList, articles, categories } from './fixture'
import type { GetCategoriesRes } from '@apis/post'
import type { Articles, MemberProfile, MyProfile, TradeStatus } from '@types'

export const handlers = [
  /**
   * 내 사용자 프로필 정보 조회
   */
  http.get('/members/mypage', () => {
    return HttpResponse.json<MyProfile>(myProfile, { status: 200 })
  }),

  /**
   * 타 사용자 프로필 정보 조회
   * members/{member-id}
   * 현재는 member-id 1과 2만 존재
   */
  http.get('/members/:memberId', ({ params }) => {
    const id = Number(params.memberId)

    return HttpResponse.json<MemberProfile>(memberProfileList[id], {
      status: 200
    })
  }),

  /**
   * 상품 판매 상태 변경
   * /articles/{articleId}
   * body: {
   *   tradeStatus: {
   *     code: 4 | 8
   *     name: '판매중' | '거래완료'
   *   }
   * }
   */
  http.get('/articles/:articleId', async ({ request, params }) => {
    const id = params.articleId as string
    const tradeStatus = (await request.json()) as TradeStatus

    articles.elements = articles.elements.map(article =>
      article.id === Number(id) ? { ...article, tradeStatus } : article
    )

    return HttpResponse.json({
      status: 200
    })
  }),

  /**
   * 사용자가 판매중인 게시글 조회
   *  /articles?memberId={memberId}&tradeStatusCode=4
   *  현재는 memberId, tradeStatusCode와 관계없이 늘 같은 게시글만 보여줌
   */
  http.get('/articles', async () => {
    return HttpResponse.json<Articles>(articles, { status: 200 })
  }),

  /**
   * 메인 페이지 카테고리
   *
   *
   */
  http.get('https://offer-be.kro.kr/api/categories', () => {
    return HttpResponse.json<GetCategoriesRes>(categories, { status: 200 })
  })
]
