import { join, dirname } from "path";
// @ts-ignore
import type { StorybookConfig } from "@storybook/react";
import path from "path";
// @ts-ignore
import { loaders } from "@aztlan/webpack-config";

import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: [
    //'../../../node_modules/@aztlan/assets/images',
    //'../../../node_modules/@aztlan/assets/fonts',
    `${getAbsolutePath("@aztlan/assets")}/fonts`,
    "../src/assets",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-themes"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },
  docs: {
    autodocs: true,
    //autodocs: "tag",
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  webpackFinal: async (config, { configType }) => {
    //console.log(config, __dirname)
    /*
     config.resolve.roots = [                                  
       path.resolve(__dirname, '../src/'),
       path.resolve(__dirname, '../src/ui'),
   path.resolve(__dirname, '../../../node_modules/@aztlan/assets/fonts'),
   path.resolve(__dirname, '../../../node_modules/@aztlan/assets/images')   
 ]*/

    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }

    config.module.rules.push({
      test: /\.scss$/,
      include: path.resolve(__dirname, "../../.."),
      use: [
        "style-loader",
        loaders["css-loader"],
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: [
                // path.resolve(__dirname, "../node_modules"), // Already default
                path.resolve(__dirname, "../src"),
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

export default config;
