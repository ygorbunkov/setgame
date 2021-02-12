const { TerserPlugin } = require('./plugins')

module.exports = {
    devtool: 'nosources-source-map',
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                extractComments: 'all'
            })
        ]
    }
}