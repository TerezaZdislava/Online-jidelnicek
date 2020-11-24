const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
module.exports = {
  //musim zapsat i dalsi javascript
  //do odkazu zapisovat html soubory jen jako ./nazev
  //funguje to jako zacatek stromu
  //https://webpack.js.org/concepts/entry-points/
  //pokud menim webpack, potreba ctrc+c a ukoncit a zacit znovu npm start
  entry: {
    entry: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              //vypnuto, aby CSS fungovalo - ale mozna nevhodne reseni
              // modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader', 'img-loader'],
      },
    ],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    // new HtmlWebPackPlugin({
    //   template: './src/form.html',
    //   filename: './form.html',
    // }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
          noErrorOnMissing: true,
        },
        {
          from: 'src/html',
          to: '',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};
