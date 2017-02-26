var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        main:'./src/script/main.js',
        a:'./src/script/a.js'
    },
    output: {
        path:'./dist',
        filename: './js/[name]-[chunkhash].js'
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'index-[hash].html',
            template:'index.html',
            inject:'head'//body
        })
    ]
}