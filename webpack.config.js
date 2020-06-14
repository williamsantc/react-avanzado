const HtmlWebPackPlugin = require('html-webpack-plugin')
const WebpackPwaMainfest = require('webpack-pwa-manifest')
const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaMainfest({
      name: 'Petgram - Tu app de fotos de mascostas',
      short_name: 'Petgram 🐶',
      description: 'Con petgram puedes encontrar fotos de animales domesticos',
      background_color: '#fff',
      theme_color: '#b1a',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}
