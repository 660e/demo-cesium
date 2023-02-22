const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    port: 3333,
    open: true
  },
  productionSourceMap: false,
  transpileDependencies: true
});
