import * as webpack from 'webpack';
import merge from 'webpack-merge';
import { configBaseDev, configBaseProd } from './webpack.base.config';

const configRendererCommon: webpack.Configuration = {
    entry: {
        renderer: './src/renderer.ts'
    },
    target: 'electron-renderer'
};

export const configRendererDev: webpack.Configuration = merge(configBaseDev, configRendererCommon, {
});

export const configRendererProd: webpack.Configuration = merge(configBaseProd, configRendererCommon, {
});
