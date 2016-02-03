'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeStyles = mergeStyles;
exports.mergeAndPrefix = mergeAndPrefix;
exports.prepareStyles = prepareStyles;

var _autoPrefix = require('../styles/auto-prefix');

var _autoPrefix2 = _interopRequireDefault(_autoPrefix);

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mergeSingle(objA, objB) {
  if (!objA) return objB;
  if (!objB) return objA;
  return (0, _reactAddonsUpdate2.default)(objA, { $merge: objB });
}

function mergeStyles(base) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < args.length; i++) {
    if (args[i]) {
      base = mergeSingle(base, args[i]);
    }
  }
  return base;
}

/**
 * `mergeAndPrefix` is used to merge styles and autoprefix them. It has has been deprecated
 *  and should no longer be used.
 */
function mergeAndPrefix() {
  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, 'Use of mergeAndPrefix() has been deprecated. ' + 'Please use mergeStyles() for merging styles, and then prepareStyles() for prefixing and ensuring direction.') : undefined;
  return _autoPrefix2.default.all(mergeStyles.apply(undefined, arguments));
}

/**
 * `prepareStyles` is used to merge multiple styles, make sure they are flipped
 * to rtl if needed, and then autoprefix them.
 *
 * Never call this on the same style object twice. As a rule of thumb, only
 * call it when passing style attribute to html elements.
 *
 * If this method detects you called it twice on the same style object, it
 * will produce a warning in the console.
 */
function prepareStyles(muiTheme) {
  var style = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  for (var _len2 = arguments.length, styles = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    styles[_key2 - 2] = arguments[_key2];
  }

  if (styles) {
    //warning(false, 'Providing more than one style argument to prepareStyles has been deprecated. ' +
    //  'Please pass a single style, such as the result from mergeStyles(...styles).');
    style = mergeStyles.apply(undefined, [style].concat(styles));
  }

  return muiTheme.prepareStyles(style);
}

exports.default = {
  mergeStyles: mergeStyles,
  mergeAndPrefix: mergeAndPrefix,
  prepareStyles: prepareStyles
};