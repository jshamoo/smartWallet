module.exports = {
  entry: '/client/src/index/js',
  output: {
    filename: 'bundle.js',
    path: '/client/dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exlude: /node_modules/,
        loader: 'babel-loader',
        options: {
          'presets': ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};
