import * as webpack from 'webpack';
import * as path from 'path';
import merge from 'webpack-merge';

const configBaseCommon: webpack.Configuration = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.scss', '.css', '.html'], // The resolving order
    },
    node: {
        __dirname: false,
        __filename: false
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};

export const configBaseDev: webpack.Configuration = merge(configBaseCommon, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist/dev'),
        filename: '[name].js'
    },
    devtool: 'source-map',
});

export const configBaseProd: webpack.Configuration = merge(configBaseCommon, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist/prod'),
        filename: '[name].js'
    }
});
