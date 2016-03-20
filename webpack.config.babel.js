export default {
  entry: './src/index.js',
  output: {
    path: 'public',
    filename: 'index.js'
  },
  loaders: [
    {
      loader: 'babel',
      include: './src',
      test: /\.jsx?$/,
      query: {
        cacheDirectory: true
      }
    }
  ],
  modulesDirectories: ['node_modules'],
  extensions: ['', '.js'],
  devtool: 'source-map'
}
