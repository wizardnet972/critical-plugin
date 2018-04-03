<div align="center">
  <a href="https://webpack.js.org/">
    <img src="https://goo.gl/f6QJFa">
  </a>
  <h1><code>critical-plugin</code> for webpack</h1>
  [![npm][npm]][npm-url]
[![deps][deps]][deps-url]
[![test][test]][test-url]
<a href="https://npmcharts.com/compare/html-webpack-critical-plugin?minimal=true">
		<img src="https://img.shields.io/npm/dm/html-webpack-critical-plugin.svg">
</a>

  <p>Extract your styles from js bundle and inlined the critical styles in your html</p>
</div>

# Install

```
$ npm install critical-plugin [--save-dev]
```

# Setup

First, instantiate the plugin with options in your webpack.config:

```js
// webpack.config.js example

var CriticalPlugin = require('critical-plugin');

module.exports = {
  // ...

  plugins: [
    // ... other plugins
    
    new CritialPlugin()
  ]
  // ...
}
```

# Articles

*  [Why should you use this in production? Read at Meduim](https://medium.com/@wizardnet972/https-medium-com-wizardnet972-make-your-page-rendering-faster-e14a95747c7a)

# Like critical-plugin?
Support it by giving feedback, contributing, becoming a backer/sponsor or just by 🌟 starring the project!

Follow me [![twitter](https://img.shields.io/twitter/follow/wizardnet972.svg?style=social&label=%20wizardnet972)](https://twitter.com/wizardnet972) to be notified about new releases.

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
 
[npm]: https://img.shields.io/npm/v/critical-plugin.svg
[npm-url]: https://npmjs.com/package/critical-plugin

[deps]: https://david-dm.org/wizardnet972/critical-plugin.svg
[deps-url]: https://david-dm.org/wizardnet972/critical-plugin

[test]: http://img.shields.io/travis/wizardnet972/critical-plugin.svg
[test-url]: 
https://travis-ci.org/wizardnet972/critical-plugin

