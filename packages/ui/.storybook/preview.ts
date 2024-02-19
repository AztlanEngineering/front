/** @type { import('@storybook/react').Preview } */
import { withThemeByClassName } from "@storybook/addon-themes";
import "local.scss";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light-theme",
        dark: "dark-theme"
      },
      defaultTheme: "light"
    })
  ]
};

export default preview;
