import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/development",
        destination: "/about",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
