const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: isProduction ? '/jan_hoeck' : '',
    assetPrefix: isProduction ? '/jan_hoeck' : ''
}

module.exports = nextConfig
