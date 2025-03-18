import type { StorybookConfig } from '@storybook/react-vite';
import path from "path";
import type {BuildPath} from "../build/types/config";

const config: StorybookConfig = {
    "stories": [
        "../../src/**/*.mdx",
        "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions"
    ],
    "framework": {
        "name": "@storybook/react-vite",
        "options": {}
    },
    viteFinal: async (config) => {
        const paths: BuildPath = {
            entry: '',
            output: '',
            html: '',
            src: '../../src'
        };

        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, paths.src)
        };

        return config;
    }
};
export default config;