import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  distDir: 'out',
  reactStrictMode: true,
  basePath: '',
  images: {
    remotePatterns: [
      new URL('https://img.youtube.com/vi/**'),
      new URL('https://i.ytimg.com/vi/**'),
      new URL('https://static-cdn.jtvnw.net/user-default-pictures-uv/**'),
    ],
  },
}

module.exports = nextConfig
