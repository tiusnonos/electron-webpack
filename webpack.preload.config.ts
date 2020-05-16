import * as webpack from 'webpack';
import merge from 'webpack-merge';
import { configBaseDev, configBaseProd } from './webpack.base.config';

const configPreloadCommon: webpack.Configuration = {
    entry: {
        preload: './src/preload.ts'
    },
    target: 'electron-preload'
};

export const configPreloadDev: webpack.Configuration = merge(configBaseDev, configPreloadCommon, {
});

export const configPreloadProd: webpack.Configuration = merge(configBaseProd, configPreloadCommon, {
});
