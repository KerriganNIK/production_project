import type webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";
import type { BuildEnv, BuildPath } from "./config/build/types/config";

const config = (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };

    const mode = env.mode || 'development';
    const isDev = mode === "development";
    const port = env.port || 3000;

    return buildWebpackConfig({
        paths,
        mode,
        isDev,
        port
    });
};
export default config;