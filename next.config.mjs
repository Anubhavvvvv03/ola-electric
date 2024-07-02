/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.olaelectric.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "plus.unsplash.com",
          port: "",
          pathname: "/**",
        },
       
       
      ],
    },
  };
  
  export default nextConfig;
  