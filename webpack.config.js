const path = require('path')

const { merge } = require('webpack-merge')

const webpackConfigDir = path.join(__dirname, './config/webpack')

// return the object with combined config
// with respect to given NODE_ENV aliases

const getConfigByNodeEnvAlias = (...aliasList) =>
  merge(
    ...aliasList.map((alias) =>
      require(path.join(webpackConfigDir, alias + '.js'))
    )
  )

module.exports = (_env, { mode }) => getConfigByNodeEnvAlias('base', mode)
