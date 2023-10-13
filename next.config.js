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
        hostname: 'creativeteaching.net',
        pathname: '/media/**',
      },
    ],
  },
  // next.config.js

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
