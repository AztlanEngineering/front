"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedOut = exports.LoggedIn = void 0;
const ui_1 = require("ui");
exports.default = {
    title: 'Example/Header',
    component: ui_1.Header,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
};
exports.LoggedIn = {
    args: {
        user: {
            name: 'Jane Doe',
        },
    },
};
exports.LoggedOut = {};
