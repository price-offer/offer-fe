import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { authRedirect } from 'middlewares'
import { env } from '@constants'

const middleware = async (request: NextRequest) => {
  const offerToken = request.cookies.get(env.AUTH_TOKEN_KEY)
  const url = request.nextUrl.clone()
  const headers = new Headers(request.headers)

  if (offerToken) {
    headers.set('Authorization', `Bearer ${offerToken.value}`)
  }

  if (request.nextUrl.pathname.startsWith('/auth/redirect')) {
    const response = authRedirect(request)

    return response
  }

  if (!offerToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.rewrite(url, {
    headers
  })
}

export const config = {
  matcher: ['/messagebox', '/post', '/auth/redirect', '/api/:path*']
}

export default middleware
