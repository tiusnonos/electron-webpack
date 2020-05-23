import webpack from 'webpack';
import path from 'path';

const rootPath = path.resolve(__dirname, '../');

export const configBaseDev: webpack.Configuration = {
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(rootPath, 'dist/dev'),
        filename: '[name].js',
        publicPath: 'http://localhost:8123/' // To activate for devServer
    },
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.html', '.scss'], // The resolving order
        alias: {
            '@styles': path.resolve(rootPath, 'src/scss/')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        public: 'localhost:8123',
        publicPath: 'http://localhost:8123/',
        contentBase: path.resolve(rootPath, 'dist/dev'),
        host: '0.0.0.0',
        port: 8123,
        hot: true,
        inline: true
    }
};

export const configBaseProd: webpack.Configuration = {
    mode: 'production',
    devtool: 'source-map',
    output: {
        path: path.resolve(rootPath, 'dist/prod'),
        filename: '[name].js'
    },
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.html', '.scss'], // The resolving order
        alias: {
            '@styles': path.resolve(rootPath, 'src/scss/')
        }
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
