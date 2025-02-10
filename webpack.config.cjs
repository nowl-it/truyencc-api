const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    mode: 'development',
    devtool: 'inline-source-map',
    externals: [nodeExternals()],
    entry: './src/api.ts',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.cjs',
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
            },
        ],
    },
}
