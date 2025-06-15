import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '',
  webpack: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          handlebars: 'handlebars/dist/handlebars.js',
        },
      },
    }
  },
}

const withNextIntl = createNextIntlPlugin()
module.exports = withNextIntl(nextConfig)
