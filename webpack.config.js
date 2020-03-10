const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: "development",
  entry: path.join(__dirname, 'src', 'client', 'index.ts'),
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist', 'client'),
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.vue?$/,
        exclude: /node_modules/,
        loader: 'vue-loader',
        options: {
          esModule: true
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: { vue: 'vue/dist/vue.js' },
    extensions: ['.ts', '.js', '.vue'],
  }
};
