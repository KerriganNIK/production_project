import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildDevServer} from "./buildDevServer";
import {buildResolves} from "./buildResolvers";
import {BuildOptions} from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {paths, mode, isDev } = options;

    return {
        mode: mode,
        devtool: isDev ? 'inline-source-map' : undefined,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolves(options),
        plugins: buildPlugins(options),
        devServer: buildDevServer(options)
    }
}