import webpack from 'webpack';
import merge from 'webpack-merge';
import { configBaseDev, configBaseProd } from './webpack.base.config';

export const configPreloadDev: webpack.Configuration = merge(configBaseDev, {
    entry: {
        preload: './src/preload.ts'
    },
    target: 'electron-preload'
});

export const configPreloadProd: webpack.Configuration = merge(configBaseProd, {
    entry: {
        preload: './src/preload.ts'
    },
    target: 'electron-preload'
});
