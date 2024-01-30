// @ts-ignore
import type { StorybookConfig } from "@storybook/react";
import { configureSharedConfig, getAbsolutePath } from "@aztlan/storybook-config";

const {
  addons,
  core,
  docs,
  framework,
  pushScss,
  pushTsconfigPathsPlugin,
  staticDirs,
  stories,
  resolve,
  typescript,
} = configureSharedConfig({
  location:__dirname,
})

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config: StorybookConfig = {
  addons:[ 
    ...addons, 
    getAbsolutePath("@aztlan/storybook-addon-relay") 
  ],
  core,
  docs,
  framework,
  staticDirs,
  stories,
  typescript,
  webpackFinal: async (c, { configType }) => {
    pushScss(c)
    pushTsconfigPathsPlugin(c)
    return c;
  },
};

export default config;
