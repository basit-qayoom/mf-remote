const { NextFederationPlugin } = require("@module-federation/nextjs-mf");
/** @type {import('next').NextConfig} */
const nextConfig = {
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
        extraOptions: {
          exposePages: true,
        }
      })
    );

    return config;
  },
};

module.exports = nextConfig;
