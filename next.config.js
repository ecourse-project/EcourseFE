// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: 'teachingchem.edu.vn',
        pathname: '/media/**',
      },
    ],
  },
  // next.config.js
  transpilePackages: ['@ant-design/pro-chat'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'http://localhost:4000/', // or 'allow-from: https://example.com' for a specific domain
          },
        ],
      },
    ];
  },
};
