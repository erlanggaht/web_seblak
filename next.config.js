/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com',"daisyui.com"],
  },
  trailingSlash: true,
}

module.exports = nextConfig
