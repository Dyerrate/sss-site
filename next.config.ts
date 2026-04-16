import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/development",
        destination: "/about",
        permanent: false,
      },
      {
        source: "/product",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/connectz",
        destination: "/products/connectz",
        permanent: true,
      },
      {
        source: "/connectz/privacypolicy",
        destination: "/products/connectz/privacypolicy",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
