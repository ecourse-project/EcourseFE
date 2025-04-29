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
        source: '/(.*)', // Apply to all routes
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors *;', // Allow embedding from all domains
          },
        ],
      },
    ];
  },
};
