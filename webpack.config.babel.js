export default {
  entry: './src/index.js',
  output: {
    path: 'public',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: './src',
        test: /\.js$/,
        query: {
          cacheDirectory: true
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.js']
  },
  devtool: 'source-map'
}
