'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.storageEnhancer = storageEnhancer;

var _reduxPersist = require('redux-persist');

var _session = require('redux-persist/lib/storage/session');

var _session2 = _interopRequireDefault(_session);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var key = 'dav';

function storageEnhancer() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { key: key, storage: _session2.default };

  return function (createStore) {
    return function (reducer, initialState, enhancer) {
      var options = _extends({ key: key, storage: _session2.default }, opts);
      var store = createStore((0, _reduxPersist.persistReducer)(options, reducer), initialState, enhancer);
      var persistor = (0, _reduxPersist.persistStore)(store);
      return _extends({}, store, { persistor: persistor });
    };
  };
}
//# sourceMappingURL=index.js.map