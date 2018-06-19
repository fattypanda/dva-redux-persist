
export default {

  namespace: 'home',

  state: {
    time: null,
  },

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    * update ({ payload }, { call, put }) {
      yield put({ type: 'save', payload: { time: new Date().getTime() } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
