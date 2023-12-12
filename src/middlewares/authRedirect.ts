import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import type { CommonResponse } from '@utils/http'
import { env } from '@constants'

type LoginRes = {
  id: number
  nickname: string
  profileImageUrl: string
  accessToken: string
  newMember: boolean
}

const getLogin = (code: string): Promise<CommonResponse<LoginRes>> => {
  const data = fetch(`${env.BASE_API_URL}/login/kakao?code=${code}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  return data.then(res => res.json())
}

export const authRedirect = async (request: NextRequest) => {
  const offerToken = request.cookies.get(env.AUTH_TOKEN_KEY)

  if (offerToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  const nextUrl = request.nextUrl.clone()
  const response = NextResponse.redirect(nextUrl)
  const kakaoCode = request.nextUrl.searchParams.get('code')

  if (kakaoCode) {
    const data = await getLogin(kakaoCode)
    const token = data.data.accessToken

    response.cookies.set(env.AUTH_TOKEN_KEY, token)
  }

  return response
}
