import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.jimcdn.com",
      },
      {
        protocol: "https",
        hostname: "cds-api.cod-st.com",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1338",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1338",
      },
    ],
  },
};

export default nextConfig;
