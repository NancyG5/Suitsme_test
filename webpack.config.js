const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js',
    },

    

    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),

        new CopyPlugin({
                patterns: [
                    {
                      from: path.resolve(__dirname, './assets/images'),
                      to:   path.resolve(__dirname, './dist/images')
                    },
                    {
                        from: path.resolve(__dirname, './assets/audio'),
                        to:   path.resolve(__dirname, './dist/audio')
                      }
                  ]
                })
    ],


    // module: {
    //     rules: [
    //         {
    //             test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    //             use: 'file-loader',
    //         },
    //         {
    //             test: /\.mp3$/,
    //             type: 'asset/resource',
    //         },

    //     ]
    // }
}