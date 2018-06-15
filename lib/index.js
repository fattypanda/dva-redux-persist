'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.storageEnhancer = storageEnhancer;

var _reduxPersist = require('redux-persist');

var _storage = require('redux-persist/lib/storage');

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var key = 'dav';

function storageEnhancer() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { key: key, storage: _storage2.default };

  return function (createStore) {
    return function (reducer, initialState, enhancer) {
      var store = createStore((0, _reduxPersist.persistReducer)(opts, reducer), initialState, enhancer);
      var persistor = (0, _reduxPersist.persistStore)(store);
      return _extends({}, store, { persistor: persistor });
    };
  };
}
//# sourceMappingURL=index.js.map