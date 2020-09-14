const path = require('path');
const glob = require('glob');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const setMPA = () => {
    const entry = {};
    const entryFiles = glob.sync(path.join(__dirname, './flow/*'));
    Object.keys(entryFiles)
    .map((index) => {
        const entryFile = entryFiles[index];
        const match = entryFile.match(/flow\/(.*)\.js/);
        const pageName = match && match[1];
        entry[pageName] = entryFile;
    });
  
    return {entry};
};
const { entry } = setMPA();

module.exports = {
    entry,
    output: {
        path: path.resolve('flow-dist'),
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
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
};
