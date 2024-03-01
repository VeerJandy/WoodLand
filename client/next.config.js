const path = require('path')

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~/app': path.resolve(__dirname, './src/app'),
      '~/assets': path.resolve(__dirname, './src/assets'),
      '~/consts': path.resolve(__dirname, './src/consts'),
      '~/enums': path.resolve(__dirname, './src/enums'),
      '~/helpers': path.resolve(__dirname, './src/helpers'),
      '~/hooks': path.resolve(__dirname, './src/hooks'),
      '~/models': path.resolve(__dirname, './src/models'),
      '~/modules': path.resolve(__dirname, './src/modules'),
      '~/packages': path.resolve(__dirname, './src/packages'),
      '~/store': path.resolve(__dirname, './src/store'),
      '~/styles': path.resolve(__dirname, './src/styles'),
      '~/ui': path.resolve(__dirname, './src/ui'),
      '~/i18n': path.resolve(__dirname, './src/i18n'),
      '~/components': path.resolve(__dirname, './src/components')
    }
    return config
  },
  images: {
    // TODO Change url
    remotePatterns: [
      { hostname: 'images.pexels.com' },
      { hostname: 'pbs.twimg.com' },
      { hostname: 'external-preview.redd.it' },
      { hostname: 'img10.joyreactor.cc' },
      { hostname: 'localhost' }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.BACKEND_HOST}/api/:path*`
      }
    ]
  }
}

module.exports = nextConfig
