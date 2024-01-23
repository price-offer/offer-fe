import { env } from '@constants'

const OAUTH_ENDPOINT = {
  KAKAO: 'https://kauth.kakao.com/oauth/authorize'
}

export const OAUTH_URL = {
  KAKAO: `${OAUTH_ENDPOINT.KAKAO}?${new URLSearchParams([
    ['response_type', 'code'],
    ['client_id', env.KAKAO_REST_API_KEY || ''],
    ['redirect_uri', env.KAKAO_REDIRECT_URI || '']
  ])}`
}
