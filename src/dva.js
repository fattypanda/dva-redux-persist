import { storageEnhancer } from './utils/dva-redux-persist';

export function config () {
  return {
    extraEnhancers: [
      storageEnhancer()
    ],
  };
}
