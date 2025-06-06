import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { BuildOptions } from "./types/config";

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    return {
        port: options.port,
        open: true,
        hot: true,
        historyApiFallback: true
    };
};