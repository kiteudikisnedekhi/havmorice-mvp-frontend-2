const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA({
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://havmorice-mvp-2-production.up.railway.app/:path*',
      },
    ];
  },
});