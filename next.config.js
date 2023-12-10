const BASE_API_URL = 'https://offer-be.kro.kr/api'

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${BASE_API_URL}/:path*`
      }
    ]
  },
  swcMinify: true,
  reactStrictMode: false
}
