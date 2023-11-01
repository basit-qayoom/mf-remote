const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'MFRemote',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './card': './components/Card.jsx',
          './button': './components/Button.jsx',
        },
        remotes: {
          MFHost: `MFHost@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
