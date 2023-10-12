const isDevelopment = process.env.NODE_ENV === "development";

console.log('isDevelopment', isDevelopment)

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: !isDevelopment ? '/jan_hoeck' : undefined,
    assetPrefix: !isDevelopment ? 'https://janhoeck.github.io/jan_hoeck' : undefined,
    /**
     * Enable static exports for the App Router.
     *
     * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
     */
    output: "export",
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

module.exports = nextConfig
