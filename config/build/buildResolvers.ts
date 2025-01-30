import webpack from "webpack";
import {BuildOptions} from "./types/config";

export const buildResolves = (options: BuildOptions): webpack.Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@": options.paths.src,
        }
    }
}