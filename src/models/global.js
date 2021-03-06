export default {

  namespace: 'global',

  state: {
    collapsed: false,
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'});
    },

  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
    changeLayoutCollapsed(state, {payload}) {
      return {
        ...state,
        collapsed: payload
      };
    }
  },

};
