import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '',
  turbopack: {
    resolveAlias: {
      handlebars: 'handlebars/dist/handlebars.js',
    },
  },
  images: {
    qualities: [75, 80, 100],
  },
}

const withNextIntl = createNextIntlPlugin()
module.exports = withNextIntl(nextConfig)
