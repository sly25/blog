// const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
    context: path.join(__dirname),
    // devtool: debug ? "inline-sourcemap" : null,
    entry: {
        app:  path.resolve(__dirname,'./src/index.js'),
        vendor: ['react','antd','es6-promise','react-responsive','react-dom','react-router','react-router-dom','whatwg-fetch','react-lz-editor']
    },
    // mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs'], //添加组件的插件配置
                    // plugins: [
                    //     ["import",[{"style":"css","libraryName":"antd"}]]
                    // ],
                }
            },
            //下面是使用 ant-design 的配置文件
            { test: /\.css$/,loader: 'style-loader!css-loader' },
            // {
            //     test: /\.css$/,
            //     loader: 'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!',
            //     exclude: /node_modules/
            // },
            { test:/\.less$/,loader:'style-loader!css-loader!less-loader'},
            { test: /\.(png|gif|jpg|jpeg|bmp)($|\?)/,exclude: /(node_modules)/,loader:'url-loader?limit=5000' },
            { test: /\.(woff|woff2|svg|ttf|eot)$/,loader:'url-loader?limit=6000000' },
            // { test: /\.(eot|woff|svg|ttf)$/,loader: 'file-loader?limit=6000000' },
        ]
    },
    output: {
        path: __dirname,
        filename: "[name].js",
        publicPath: './'
    },
    plugins:  [
        // new webpack.optimize.DedupePlugin(),
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin({
        //     comments: false,
        //     // compress:{
        //     //     warning: false,
        //     // },
        //     mangle: false,
        //     sourcemap: false
        // }),
        // //html模板插件
        // new  HtmlWebpackPlugin({
        //     template: __dirname + './index.html'
        // }),
        // //热加载插件
        // new webpack.HotModuleReplacementPlugin(),
        // //打开浏览器
        // new OpenBrowserPlugin({
        //     url: 'http://localhost:8080'
        // }),
        //在js代码中可使用__DEV__判断是否是dev模式
        // new webpack.DefinePlugin({
        //     __DEV__: JSON.stringify(JSON.parse((Process.env.NODE_ENV ==='dev')||'false'))
        // }),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV:  JSON.stringify("production")}
        }),
        new BabiliPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name : 'vendor',
            filename: 'vendor.js'
        }),
        // new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
        // new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ],

    devServer: {
        historyApiFallback: true,
        proxy: {
            //凡是api开头的HTTP请求都会被代理到localhost：3000由koa提供数据mock
            //若是成熟项目有可用的线上端口，将端口地址直接写到target上即可使用
            '/api': {
                target: 'http://localhost',
                secure: false
            }
        },
    },
    // performance: {
    //     hints: 'warning',//超出设置的上线会报错
    //     // maxEntrypointSize: 100000,
    //     // maxAssetSize: 450000,
    // }
    // resolve: {
    //     extensions: [' ','js','jsx']
    // },
    // postcss: [
    //     require('autoprefixer')
    // ],
    // eslint: {
    //     configFile: '.eslintrc'
    // }
};