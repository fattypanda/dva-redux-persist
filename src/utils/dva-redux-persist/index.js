import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const key = 'dav';

export function storageEnhancer(opts = { key, storage }) {
  return createStore => (reducer, initialState, enhancer) => {
    const store = createStore(persistReducer(opts, reducer), initialState, enhancer);
    const persistor = persistStore(store);
    return {...store, persistor };
  }
}
