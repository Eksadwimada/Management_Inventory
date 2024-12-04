/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/home/overview",
        permanent: true, // Gunakan true jika ini redirect permanen
      },
    ];
  },
};

export default nextConfig;
