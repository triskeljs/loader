/* global describe, it */

var assert = require('assert'),
    createFilter = require('../create-filter')

describe('loader', function () {

  function _runTestCase (include, exclude, file, result) {

    it(`${ include }, !${ exclude } ${ result ? '' : '!' }'${ file }'`, function () {

      assert.strictEqual(
        createFilter(include, exclude)(file),
        result
      )

    })

  }

  [
    [null, null, 'any.file.ext', true ],

    ['**/*.html', null, 'non_slash/file.html', true ],
    ['**/*.html', '**/*.tkl.html', 'non_slash/file.html', true ],
    ['**/*.html', '**/file.*', 'non_slash/file.html', false ],

  ].forEach( (test_case) => _runTestCase.apply(null, test_case) )

})
