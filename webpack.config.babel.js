export default {
  entry: './src/index.js',
  output: {
    path: 'public',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: /(src)/,
      loader: 'babel',
      query: {
        cacheDirectory: true
      }
    }]
  },
  resolve: {
    modulesDirectories: ['.', 'src', 'node_modules'],
    extensions: ['', '.js']
  },
  devtool: 'source-map'
}
