/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com',"daisyui.com"],
  },
  trailingSlash: true,
}

module.exports = nextConfig
