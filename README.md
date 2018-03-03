Critical extension for the HTML Webpack 4 Plugin
========================================

Webpack wrapper around [Addy Osmani's critical library](https://github.com/addyosmani/critical), which helps
to inline minimum necessary CSS in HTML documents to prevent stylesheet loading from blocking the [Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/).


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

    // new HtmlWebPackPlugin(),

    // new ExtractTextPlugin({
    //     filename: "[name].[contenthash].css"
    // }),

    // if you use HtmlWebpackInlineSVGPlugin you should pass runPreEmit.  
    // new HtmlWebpackInlineSVGPlugin({
    //   runPreEmit: true
    // }),

    new HtmlWebpackCriticalPlugin({
     critical: {
        inline: true,
        base: 'dist/',
        // You can found all the options in https://github.com/addyosmani/critical#options
     }
    }),
]
...
```

## How and Why You Should Inline Your Critical CSS?

If you head over to Google PageSpeed Insights and analyze one of your web pages, you might see warnings about optimizing your CSS delivery by inlining critical CSS and loading render-blocking stylesheets asynchronously.

Browsers won’t render the above-the-fold content of your web pages unless they have loaded all of your CSS files. This can be a big deal when a lot of files need to be loaded.

Not all of your users will have a fast internet connection and waiting for the libraries, CSS and JavaScript to load before they can actually access the content they came for can be very frustrating. Even users with fast internet can lose connectivity in certain situations, like when they are passing through a tunnel. At this point, they would still be able to access the main content if your website has inlined critical CSS and doesn’t load other files before showing main content.

