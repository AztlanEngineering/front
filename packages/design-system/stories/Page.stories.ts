import { within, userEvent } from "@storybook/testing-library";

import { Page } from "ui/Page";

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};
