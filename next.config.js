module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*`
      }
    ]
  },
  swcMinify: true,
  reactStrictMode: false
}
