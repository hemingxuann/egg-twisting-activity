const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // publicPath: './',
    devServer: {
        proxy: {
            '/activities': {
                target: 'http://test.venus.api.putike.cn/',
                changeOrigin: true,
                pathRewrite: {
                    '^/activities': '/activities',
                },
            },
        },
    },
})
