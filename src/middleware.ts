import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = (request: NextRequest) => {
  const MOCK_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAyMTkxMDQ0LCJleHAiOjE3MDU3OTEwNDR9.cLslK_v-VbWhlWQvcERAOZ5ZWSBKP05DAgLLrvbpcX8'

  const url = request.nextUrl.clone()
  const headers = new Headers(request.headers)
  headers.set('Authorization', `Bearer ${MOCK_TOKEN}`)

  return NextResponse.rewrite(url, {
    headers
  })
}

export const config = {
  matcher: '/api/:path*'
}
