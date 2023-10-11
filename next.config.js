const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: isProduction ? '/jan_hoeck' : '',
    assetPrefix: isProduction ? '/jan_hoeck' : '',
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
