const withTranspileModules = require('next-transpile-modules');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins(
  [withTranspileModules(['@cloudscape-design/components'])],
  nextConfig,
);
