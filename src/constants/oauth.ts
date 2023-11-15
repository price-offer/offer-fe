import { toQueryString } from '@utils/format'

const OAUTH_ENDPOINT = {
  KAKAO: 'https://kauth.kakao.com/oauth/authorize'
}

export const OAUTH_URL = {
  KAKAO: `${OAUTH_ENDPOINT.KAKAO}${toQueryString({
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY || '',
    redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI || ''
  })}`
}
