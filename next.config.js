const withTranspileModules = require("next-transpile-modules");
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  env: {
    ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
  },
};

module.exports = withPlugins(
  [withTranspileModules(["@cloudscape-design/components"])],
  nextConfig
);
