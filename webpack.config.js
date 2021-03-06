var webpack = require('webpack');

module.exports = {
  output: {
    filename: 'RatingWidget.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
      {
        test: /\.scss$/, loaders: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader?{browsers:["last 2 version", "> 1%", "ie 8"]}',
          'sass-loader'
        ]
      },
      {
        test: /\.svg|\.png|\.gif|\.jpe?g$/,
        loader: 'url-loader?limit=1000'
      }
    ]
  },
  externals: {
    react: {
      root: "React",
      commonjs: "react",
      commonjs2: "react",
      amd: "react"
    },
    "react/addons": {
      root: "React",
      commonjs: "react/addons",
      commonjs2: "react/addons",
      amd: "react/addons"
    }
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['bower_components', 'node_modules'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
