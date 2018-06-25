import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage/session';

const key = 'dav';

export function storageEnhancer(opts = { key, storage }) {
  return createStore => (reducer, initialState, enhancer) => {
    const options = { key, storage, ...opts };
    const store = createStore(persistReducer(options, reducer), initialState, enhancer);
    const persistor = persistStore(store);
    return {...store, persistor };
  }
}
