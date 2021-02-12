const path = require('path')

const context = path.resolve(__dirname, '../..')

module.exports = {
    context,
    target: 'web',
    entry: {
        app: path.resolve(context, 'src/client', 'index.tsx')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    modules: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                include: path.resolve(context, 'src'),
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(context, 'dist')
    }
}