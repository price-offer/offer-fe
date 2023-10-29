import { rest } from 'msw'
import { myProfile, memberProfileList, articles } from './fixture'
import type { Articles, MemberProfile, MyProfile } from '@types'

export const handlers = [
  /**
   * 내 사용자 프로필 정보 조회
   */
  rest.get('/members/mypage', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json<MyProfile>(myProfile))
  }),

  /**
   * 타 사용자 프로필 정보 조회
   * members/{member-id}
   * 현재는 member-id 1과 2만 존재
   */
  rest.get('/members/:memberId', (req, res, ctx) => {
    const { memberId } = req.params
    return res(
      ctx.status(200),
      ctx.json<MemberProfile>(memberProfileList[memberId as string])
    )
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
  rest.patch('/articles/:articleId', async (req, res, ctx) => {
    const id = req.params.articleId as string
    const { tradeStatus } = await req.json()
    articles.elements = articles.elements.map(article =>
      article.id === Number(id) ? { ...article, tradeStatus } : article
    )

    return res(ctx.status(200))
  }),
  /**
   * 사용자가 판매중인 게시글 조회
   *  /articles?memberId={memberId}&tradeStatusCode=4
   *  현재는 memberId, tradeStatusCode와 관계없이 늘 같은 게시글만 보여줌
   */
  rest.get('/articles', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json<Articles>(articles))
  })
]
