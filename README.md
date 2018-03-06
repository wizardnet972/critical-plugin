[![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![test][test]][test-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]

<div align="center">
  <img width="300" height="200" src="https://i.imgur.com/lAzmBD2.png">
  <a href="https://webpack.js.org/">
    <img width="200" height="200" vspace="" hspace="25" src="https://cdn.rawgit.com/webpack/media/e7485eb2/logo/icon-square-big.svg">
  </a>
  <h1>Critical Wrapper for Webpack</h1>
  <p>Extract your styles from js bundle and inlined the critical styles in your html</p>
</div>

> Please support this project by simply putting a Github star. Share this library with friends on Twitter and everywhere else you can.


# [Why you need it in production? Read at @Meduim](https://medium.com/@wizardnet972/https-medium-com-wizardnet972-make-your-page-rendering-faster-e14a95747c7a)

Follow me [![twitter](https://img.shields.io/twitter/follow/wizardnet972.svg?style=social&label=%20wizardnet972)](https://twitter.com/wizardnet972) to be notified about new releases.

## Install

```
$ npm install html-webpack-critical-plugin --save-dev

```

## Usage

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

 
[npm]: https://img.shields.io/npm/v/html-webpack-critical-plugin.svg
[npm-url]: https://npmjs.com/package/html-webpack-critical-plugin

[deps]: https://david-dm.org/wizardnet972/html-webpack-critical-plugin.svg
[deps-url]: https://david-dm.org/wizardnet972/html-webpack-critical-plugin

[test]: http://img.shields.io/travis/wizardnet972/html-webpack-critical-plugin.svg
https://travis-ci.org/wizardnet972/html-webpack-critical-plugin
