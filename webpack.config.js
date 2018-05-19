const path = require('path');

module.exports = {
    'entry': './client/index.js',
    'output': {
        'path': path.resolve(__dirname, './client/dist'),
        'filename': 'bundle.js'
    },
    'module':{
        'rules':[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['env', 'react']
                    }
                }               
            },
            {
                test: /\.css$/,
                use: [ 'css-loader' ]
            }
        ],
    }
}