
# @triskel/loader

Triskel HTML loader for [Webpack](https://webpack.js.org/) and [Rollup](https://rollupjs.org/)

[![npm](https://img.shields.io/npm/v/@triskel/loader.svg)](https://www.npmjs.com/package/@triskel/loader)
[![Build Status](https://travis-ci.org/triskeljs/loader.svg?branch=master)](https://travis-ci.org/triskeljs/loader)
[![dependencies Status](https://david-dm.org/triskeljs/loader/status.svg)](https://david-dm.org/triskeljs/loader)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)


### Installation

``` sh
npm i -D @triskel/loader

# npm install --save-dev @triskel/loader
```

### Webpack

> webpack.config.js

``` js
module.exports = {
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: '@triskel/loader'
      }
    ]
  }
}
```

### Rollup

> rollup.config.js

``` js
import triskelLoader from '@triskel/loader/rollup'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },

  plugins: [
    triskelLoader()
  ]
}
```
