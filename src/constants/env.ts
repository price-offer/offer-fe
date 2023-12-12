export const env = {
  KAKAO_REST_API_KEY: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY || '',
  KAKAO_REDIRECT_URI: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI || '',
  AUTH_TOKEN_KEY: process.env.NEXT_PUBLIC_AUTH_TOKEN_KEY || '',
  API_MOCKING: process.env.NEXT_PUBLIC_API_MOCKING || '',
  BASE_API_URL: process.env.NEXT_PUBLIC_BASE_URL || ''
} as const
