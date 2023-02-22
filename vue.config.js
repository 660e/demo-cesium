const { defineConfig } = require('@vue/cli-service');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = defineConfig({
  configureWebpack: {
    module: {
      // unknownContextCritical: /^.\/.*$/,
      // 基于vue的cesium安装及webpack配置
      unknownContextCritical: false,
      unknownContextRegExp: /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'node_modules/cesium/Build/Cesium/Assets', to: 'Assets' },
          { from: 'node_modules/cesium/Build/Cesium/ThirdParty', to: 'ThirdParty' },
          { from: 'node_modules/cesium/Build/Cesium/Widgets', to: 'Widgets' },
          { from: 'node_modules/cesium/Build/Cesium/Workers', to: 'Workers' }
        ]
      }),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: '/'
      })
    ],
    resolve: {
      fallback: {
        http: require.resolve('stream-http'),
        https: false,
        url: false,
        zlib: false
      }
    }
  },
  devServer: {
    port: 3333,
    open: true
  },
  productionSourceMap: false,
  transpileDependencies: true
});
