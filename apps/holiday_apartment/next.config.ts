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
}

const withNextIntl = createNextIntlPlugin()
module.exports = withNextIntl(nextConfig)
