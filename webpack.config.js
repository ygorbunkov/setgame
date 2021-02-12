const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfigDir = path.join(__dirname, './config/webpack')

const configModes = ['baseConfig', 'devConfig', 'prodConfig']
const configSets = Object.assign(
    {},
    ...configModes.map(configMode => ({
        [configMode]: require(path.join(webpackConfigDir, configMode, '.js'))
    }))
)

module.exports = ({NODE_ENV}) => ({
    ...baseConfig,
    ...configSets[NODE_ENV]
})