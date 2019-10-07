
const minimatch = require('minimatch')

module.exports = function createFilter (include_pattern, exlude_pattern, minimatch_options = {}) {

  return function _pathMatches (filepath) {
    var is_included = !include_pattern || minimatch(filepath, include_pattern, minimatch_options)

    if( !exlude_pattern ) return is_included

    return !minimatch(filepath, exlude_pattern, minimatch_options)
  }
}
