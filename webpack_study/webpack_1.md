1. css文件打包 安装css-loader style-loader 并且在引用css之前指定loader
                                              require('css-loader!./style.css')      
                     命令行中通过webpack参数指定loader --module-bind 'css=style-loader!css-loader'    --watch 监听变化自动打包 --progress查看打包进度       
                                     
2.webpack.config.js 配置 module.exports = {
                                            entry:''//字符串指定一个入口文件
                                            entry：[]//数组指定多个入口文件
                                            entry：{
                                                    } 一般用于多页面应用
                                            output:{
                                                    path:'',
                                                    filename:'[name]+[chunkhash].js'
                                                    
                                                }        
                                                                
                                           }      
3.自动化生成项目中的html  html-webpack-plugin 

```
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
```
                                               
                     