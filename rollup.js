
const triskelLoader = require('./loader')

module.exports = function triskel() {
  return {
    name: 'triskel',

    transform(html, filepath) {
      if( filepath.slice(-5) !== '.html' ) return null

      return {
        code: triskelLoader(html),
        map: { mappings: '' }
      }
    }
  }
}
