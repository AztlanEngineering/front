// @ts-ignore
import type { StorybookConfig } from "@storybook/react";
import { configureSharedConfig, getAbsolutePath } from "@aztlan/storybook-config";

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
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs,
  addons:[
    ...addons,
    getAbsolutePath("@aztlan/storybook-addon-relay")
  ],
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
