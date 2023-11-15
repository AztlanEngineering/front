// @ts-ignore
import type { StorybookConfig } from "@storybook/react";
import { configureSharedConfig } from "@aztlan/storybook-config";

const {
  staticDirs,
  addons,
  framework,
  docs,
  core,
  pushCss,
  pushTsconfigPathsPlugin
} = configureSharedConfig({
  location:__dirname,
})

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs,
  addons,
  framework,
  docs,
  core,
  webpackFinal: async (config, { configType }) => {
    pushCss(config)
    pushTsconfigPathsPlugin(config)
    return config;
  },
};

export default config;
