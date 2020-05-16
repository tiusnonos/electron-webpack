import * as webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { configBaseDev, configBaseProd } from './webpack.base.config';

const configMainCommon: webpack.Configuration = {
    entry: './src/main.ts',
    target: 'electron-main',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            inject: false
        })
    ]
};

export const configMainDev: webpack.Configuration = merge(configBaseDev, configMainCommon, {
});

export const configMainProd: webpack.Configuration = merge(configBaseProd, configMainCommon, {
});
