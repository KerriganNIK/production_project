type Mode = 'development' | 'production';

export interface BuildPath {
    entry: string;
    output: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: Mode;
    port: number;
}

export interface BuildOptions {
    mode: Mode;
    paths: BuildPath;
    isDev: boolean;
    port: number
}