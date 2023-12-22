import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { authRedirect } from 'middlewares'
import { env } from '@constants'

const middleware = async (request: NextRequest) => {
  const offerToken = request.cookies.get(env.AUTH_TOKEN_KEY)

  if (request.nextUrl.pathname.startsWith('/auth/redirect')) {
    const response = authRedirect(request)

    return response
  }

  if (!offerToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/messagebox', '/shop', '/post', '/auth/redirect']
}

export default middleware
