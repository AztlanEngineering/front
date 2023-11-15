// @ts-ignore
import type { StorybookConfig } from "@storybook/react";
import { configureSharedConfig } from "@aztlan/storybook-config";

const {
  staticDirs,
  addons,
  framework,
  docs,
  core,
  pushScss,
  pushTsconfigPathsPlugin
} = configureSharedConfig({
  location:__dirname,
})

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs,
  addons,
  framework,
  docs,
  core,
  webpackFinal: async (config, { configType }) => {
    pushScss(config)
    pushTsconfigPathsPlugin(config)
    return config;
  },
};

export default config;
