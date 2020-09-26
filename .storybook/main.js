const path = require(`path`);
const rootPath = path.resolve(__dirname, `../`);

module.exports = {
  stories: [
    `../components/**/*.stories.@(js|jsx|ts|tsx|mdx)`,
    `../pages/**/*.stories.@(js|jsx|ts|tsx|mdx)`,
  ],
  addons: [
    `@storybook/addon-links`,
    `@storybook/addon-essentials`,
    `@storybook/addon-a11y`,
  ],
  webpackFinal: async (config) => {
    config.resolve.alias[`@`] = rootPath;
    config.resolve.alias[`~`] = rootPath;

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        `style-loader`,
        `css-loader`,
        {
          loader: `sass-loader`,
          options: {
            additionalData: `
              @import "@/assets/scss/helpers/_functions.scss";
              @import "@/assets/scss/helpers/_mixins.scss";
              @import "@/assets/scss/modules/_variables.scss";
            `,
          },
        }
      ],
      include: path.resolve(__dirname, `../`),
    });

    return config;
  },
};
