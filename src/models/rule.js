import { queryRule } from '../services/api';

export default {

  namespace: 'rule',

  state: {
    data: {
      list: [],
      pagination: {},
    },
    loading: true,
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      return history.listen(({pathname}) => {
        // console.log('setup====');
      });
    },
  },

  effects: {
    *fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({
        type: 'save',
        payload: {
          loading: true
        }
      });
      const response = yield call(queryRule, payload);
      console.log('response==', response);
      yield put({
        type: 'save',
        payload: {
          data: response
        }
      });
      yield put({
        type: 'save',
        payload: {
          loading: false
        }
      })
    },
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
  },

};
