import type webpack from "webpack";
import type { BuildOptions } from "./types/config";

export const buildResolves = (options: BuildOptions): webpack.Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@": options.paths.src
        }
    };
};