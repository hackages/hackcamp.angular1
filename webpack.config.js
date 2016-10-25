const exclude = ['node_modules'];

const config = {
  devtool: 'source-map',
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: 'dist/',
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.html', '.css'],
  },
  stats: {
    chunks: false, // removed noise made by webpack while transpiling
    colors: true,  // green color, yeah green is good
    timings: true,
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        plugins: ['transform-async-to-generator'],
        query: {
          presets: [
            'babel-preset-es2015',
            'babel-preset-stage-0',
          ],
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url?name=[path][name].[ext]',
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        exclude,
      },
      { test: /\.styl$/,
        loaders: ['style', 'css', 'stylus'],
      },
      {
        test: /\.html$/,
        loader: 'html!html-minify',
        exclude,
      },
    ],
  },
  plugins: [],
};


module.exports = config;
