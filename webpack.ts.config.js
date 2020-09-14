const path = require('path');
const glob = require('glob');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const setMPA = () => {
    const entry = {};
    const entryFiles = glob.sync(path.join(__dirname, './ts/*'));
    Object.keys(entryFiles)
    .map((index) => {
        const entryFile = entryFiles[index];
        const match = entryFile.match(/ts\/(.*)\.ts/);
        const pageName = match && match[1];
        entry[pageName] = entryFile;
    });
  
    return {entry};
};
const { entry } = setMPA();

module.exports = {
    entry,
    output: {
        path: path.resolve('ts-dist'),
        filename: '[name].js',
        publicPath: '/',
    },
    mode: process.env.NODE_ENV,
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                    },
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
};
