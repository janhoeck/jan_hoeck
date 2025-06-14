import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const isDevelopment = process.env.NODE_ENV === 'development'
console.log('isDevelopment', isDevelopment)

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '',
  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
}

const withNextIntl = createNextIntlPlugin()
module.exports = withNextIntl(nextConfig)
