const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: {
          additionalData: `
            @import '/src/sass/utilities/_mixins.scss';
            @import '/src/sass/utilities/_functions.scss';
            @import '/src/sass/utilities/_variables.scss';
          `
        },
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  "webpackFinal": async (config) => {
    config.resolve.alias = {
      "@Logos": path.resolve(__dirname, '../public'),
      "@Icons": path.resolve(__dirname, '../public/icons'),
      "@Components": path.resolve(__dirname, '../src/components')
    };
    
    return config;
  }
}