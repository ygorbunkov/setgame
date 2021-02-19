const { merge } = require('webpack-merge')

const { base, development, production } = require('./config/webpack')

const configMap = {
  development,
  production
}

module.exports = (_env, { mode }) => merge(base, configMap[mode])
