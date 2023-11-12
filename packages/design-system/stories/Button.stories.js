"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Small = exports.Large = exports.Secondary = exports.Primary = void 0;
var ui_1 = require("ui");
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports.default = {
    title: 'Example/Button',
    component: ui_1.Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary = {
    args: {
        primary: true,
        label: 'Button',
    },
};
exports.Secondary = {
    args: {
        label: 'Button',
    },
};
exports.Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};
exports.Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
