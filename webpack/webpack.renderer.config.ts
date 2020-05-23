import webpack from 'webpack';
import merge from 'webpack-merge';
import { configBaseDev, configBaseProd } from './webpack.base.config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const configRendererDev: webpack.Configuration = merge(configBaseDev, {
    entry: {
        renderer: './src/renderer.ts'
    },
    target: 'electron-renderer',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'./src/index.html',
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // only enable hot in development
                            // hmr: process.env.NODE_ENV === 'development',
                            hmr: true,
                            // if hmr does not work, this is a forceful method.
                            // reloadAll: true,
                        }
                    }/*'style-loader'*/, 'css-loader', 'sass-loader']
            }
        ]
    }
});

export const configRendererProd: webpack.Configuration = merge(configBaseProd, {
    entry: {
        renderer: './src/renderer.ts'
    },
    target: 'electron-renderer',
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'./src/index.html',
            inject: true
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }/*'style-loader'*/, 'css-loader', 'sass-loader']
            }
        ]
    }
});
