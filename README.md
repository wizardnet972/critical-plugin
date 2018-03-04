Critical extension for the HTML Webpack 4 Plugin
========================================

> Please support this project by simply putting a Github star. Share this library with friends on Twitter and everywhere else you can.

Extract your styles from js bundle and inlined the critical styles in your html.

[Why? Read more at @Meduim](https://medium.com/@wizardnet972/make-your-page-rendering-faster)

Follow me [![twitter](https://img.shields.io/twitter/follow/wizardnet972.svg?style=social&label=%20wizardnet972)](https://twitter.com/wizardnet972) to be notified about new releases.

## Install

```
$ npm install html-webpack-critical-plugin --save-dev

```

## Usage

The following example shows how the Critical Webpack Plugin can be used to modify
the project's `index.html` file to inline only the (minified) CSS needed for the index page,
and asynchronously load the remaining CSS.

**webpack.config.js**

```js
const HtmlWebpackCriticalPlugin = require('html-webpack-critical-plugin');
...
plugins: [

    new HtmlWebPackPlugin(),

    new ExtractTextPlugin({
        filename: "[name].[contenthash].css"
    }),

    // if you use HtmlWebpackInlineSVGPlugin you should pass runPreEmit.  
    // new HtmlWebpackInlineSVGPlugin({
    //   runPreEmit: true
    // }),

    new HtmlWebpackCriticalPlugin({
     critical: {
        inline: true,
        base: 'dist/',
        // all options in https://github.com/addyosmani/critical#options
     }
    }),
]
...
```


# License
 [MIT](/LICENSE)