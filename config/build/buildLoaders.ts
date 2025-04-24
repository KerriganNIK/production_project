import type webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { BuildOptions } from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string): boolean => typeof resPath === 'string' && resPath.indexOf('.module.') !== -1,
                        localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader'
        ]
    };

    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }

        }
    };

    return [
        svgLoader,
        cssLoader,
        babelLoader,
        tsLoader
    ];
};