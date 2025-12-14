/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const basePath = isProduction ? '/heedong-profile' : ''

const nextConfig = {
  ...(isProduction && { output: 'export' }),
  ...(basePath && { basePath }),
  ...(basePath && { assetPrefix: basePath }),
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
}

export default nextConfig
