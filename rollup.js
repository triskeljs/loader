
const triskelLoader = require('./loader')
const createFilter = require('./create-filter')


module.exports = function triskel(options = {}) {
  if( !options.include ) options.include = '**/*.html'

  const matchesPatterns = createFilter(options.include, options.exclude)
  
  return {
    name: 'triskel',

    transform(html, filepath) {
      if( !matchesPatterns(filepath) ) return null

      return {
        code: triskelLoader(html),
        map: { mappings: '' }
      }
    }
  }
}
