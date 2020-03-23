const path = require('path');

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
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js"]
  },
  externals: {
    // react: "React",
    // "react-dom": "ReactDOM",
    // axios: 'axios'
  }

};
