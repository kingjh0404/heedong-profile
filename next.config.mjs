/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/heedong-profile-doubletea',
  assetPrefix: '/heedong-profile-doubletea',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
}

export default nextConfig
