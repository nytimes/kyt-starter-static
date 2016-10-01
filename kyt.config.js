
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  reactHotLoader: true,
  debug: false,
  noServer: true,
  modifyWebpackConfig: (config, options) => {
    if (options.type === 'client') {
      config.plugins.push(new HtmlWebpackPlugin({
        template: 'src/index.ejs'
      }));
    }
    return config;
  }
};
