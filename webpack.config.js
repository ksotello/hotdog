var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = env => {
  return {
    entry: [
      path.join(__dirname, 'src/index.js'),
      path.join(__dirname, 'src/constants.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3030,
        open: true
    },
    plugins: [
        new webpack.DefinePlugin({
          'CONST_1': env.NODE_ENV == 'dev' ? JSON.stringify('CONST_1_DEV') : JSON.stringify('CONST_1_PROD'),
          'CONST_2': env.NODE_ENV == 'dev' ? JSON.stringify('CONST_2_DEV') : JSON.stringify('CONST_2_PROD'),
          'CONST_3': env.NODE_ENV == 'dev' ? JSON.stringify('CONST_3_DEV') : JSON.stringify('CONST_3_PROD'),
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.(png|svg)$/,
          use: ['file-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
  }
};

module.exports = config
