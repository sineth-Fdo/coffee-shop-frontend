/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/login",
          permanent: false,
        },
      ];
    },
    images: {
      domains: ['firebasestorage.googleapis.com'],
    },
  };

export default nextConfig;
