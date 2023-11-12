import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs:[  
    //'../../../node_modules/@aztlan/assets/images',
    //'../../../node_modules/@aztlan/assets/fonts',
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    //getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-themes"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },
  docs: {
    autodocs:true
    //autodocs: "tag",
  },
  core:{                                                 
    disableTelemetry:true, // 👈 Disables telemetry      
  },
};
export default config;
