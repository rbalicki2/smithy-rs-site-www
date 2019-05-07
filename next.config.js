const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias.src = path.resolve(__dirname, 'src');
    config.module.rules.push({
      test: /\.(png|gif|mp4|jpg|otf|eot|ttf)$/,
      exclude: /(node_modules)/,
      use: [
        'babel-loader',
        {
          loader: 'file-loader',
          options: {
            outputPath: '../static/',
            name: '[path][name].[ext]/[hash].[ext]',
            publicPath: '/static/',
          },
        },
      ],
    });
    return config;
  },
};
