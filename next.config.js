const { default: DevServer } = require('next/dist/server/dev/next-dev-server')

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false
}

module.exports = nextConfig
