
// import { getOptions } from 'loader-utils';

var parseHTML = require('@triskel/parser'),
    _isNotNull = function (o) { return o !== null; };

function _stringify (o, options) {
  if( typeof o === 'string' ) return '\'' + o.replace(/\n+/g, '\\n').replace(/'/g, '\\\'') + '\'';
  if( o instanceof Array ) {

    return '[' + o.map(function (_o) {
      return _stringify(_o, options);
    }).filter(_isNotNull).join(',') + ']';

  } else if( o && typeof o === 'object' ) {

    // if( options.remove_comments !== false && o.comments ) return null;

    return '{' + Object.keys(o).reduce(function (props, key) {
      if( key !== 'self_closed' ) {
        props.push( ( /^[a-zA-Z_$]+$/.test(key) ? key : ( '\'' + key + '\'' ) ) + ':' + _stringify(o[key], options) );
      }
      return props;
    }, []).join(',') + '}';

  } else if( o instanceof Function ) {

    return o.toString();

  } else return o;
}


// function _extractScripts (nodes, parent, options) {
//   // console.log('_extractScripts', options );
//
//   for( var i = nodes.length - 1 ; i >= 0 ; i-- ) {
//     if( parent && nodes[i].$ === 'script' ) {
//       parent._init = parent._init || [];
//       // console.log('_init', options.processScript ? options.processScript(nodes[i]) : nodes[i]._ );
//       parent._init.push( new Function( options.processScript ? options.processScript(nodes[i]) : nodes[i]._ ) );
//       nodes.splice(i, 1);
//     } else if( nodes[i]._ instanceof Array ) {
//       _extractScripts( nodes[i]._, nodes[i], options );
//     }
//   }
//
//   return nodes;
// }

function html2js (html, options) {
  // if( options.extract_scripts !== false ) return _stringify( _extractScripts( parseHTML(html, options), null, options ), options );
  return _stringify( parseHTML(html, options), options );
}

function loader (html, options) {
  options = Object.create(options || {});

  if( options.remove_comments === undefined ) options.remove_comments = true;

  return (options.cjs ? 'module.exports = ' : 'export default ') + html2js(html, options) + ';';
}

loader.html2js = html2js;

module.exports = loader;
