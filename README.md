[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![test][test]][test-url]
<a href="https://npmcharts.com/compare/html-webpack-critical-plugin?minimal=true">
		<img src="https://img.shields.io/npm/dm/html-webpack-critical-plugin.svg">
</a>

<div align="center">
  <a href="https://webpack.js.org/">
    <img src="https://cdn-images-1.medium.com/max/2000/1*Exk4-5GTxlnvcdESMYxypA.png">
  </a>
  <h1>html webpack critical plugin</h1>
  <p>Extract your styles from js bundle and inlined the critical styles in your html</p>
</div>

> Please support this project by simply putting a Github star. Share this library with friends on Twitter and everywhere else you can.


## [Why should you use this in production? Read at Meduim](https://medium.com/@wizardnet972/https-medium-com-wizardnet972-make-your-page-rendering-faster-e14a95747c7a)

Follow me [![twitter](https://img.shields.io/twitter/follow/wizardnet972.svg?style=social&label=%20wizardnet972)](https://twitter.com/wizardnet972) to be notified about new releases.

## Install

```
$ npm install html-webpack-critical-plugin --save-dev

# if you want you can use dependencies:

$ npm install mini-css-extract-plugin --save-dev
$ npm install html-webpack-plugin --save-dev
```

## Usage

**webpack.config.js**

```js
const HtmlWebpackCriticalPlugin = require('html-webpack-critical-plugin');
...
plugins: [

    new HtmlWebpackCriticalPlugin(),
 
    // // or with options from https://github.com/addyosmani/critical#options
    // new HtmlWebpackCriticalPlugin({
    //   critical: {
    //     inline: true
    //   }
    // })

    new HtmlWebPackPlugin(),
    
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
    }),

    // only in the next version for webpack4
    // new ExtractTextPlugin({
    //     filename: "[name].[contenthash].css"
    // }),

    // if you use HtmlWebpackInlineSVGPlugin you should pass runPreEmit.  
    // new HtmlWebpackInlineSVGPlugin({
    //   runPreEmit: true
    // }),
]
...
```

# Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/wizardnet972">
          <img width="150" height="150" src="https://github.com/wizardnet972.png?size=150">
          </br>
          Wizardnet972
        </a>
      </td>
    </tr>
  <tbody>
</table>

# License
 [MIT](/LICENSE)
 
[npm]: https://img.shields.io/npm/v/html-webpack-critical-plugin.svg
[npm-url]: https://npmjs.com/package/html-webpack-critical-plugin

[deps]: https://david-dm.org/wizardnet972/html-webpack-critical-plugin.svg
[deps-url]: https://david-dm.org/wizardnet972/html-webpack-critical-plugin

[test]: http://img.shields.io/travis/wizardnet972/html-webpack-critical-plugin.svg
[test-url]: 
https://travis-ci.org/wizardnet972/html-webpack-critical-plugin

