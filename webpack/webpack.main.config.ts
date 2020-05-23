import webpack from 'webpack';
import merge from 'webpack-merge';
import { configBaseDev, configBaseProd } from './webpack.base.config';

export const configMainDev: webpack.Configuration = merge(configBaseDev, {
    entry: './src/main.ts',
    target: 'electron-main'
});

export const configMainProd: webpack.Configuration = merge(configBaseProd, {
    entry: './src/main.ts',
    target: 'electron-main'
});
