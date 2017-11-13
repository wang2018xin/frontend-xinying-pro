import { routerRedux } from 'dva/router';
import { fakeAccountLogin, fakeMobileLogin } from '../services/api';

export default {

  namespace: 'login',

  state: {
    status: undefined, // 状态：ok | error
    type: undefined,   // 类型：account | ?
    submitting: false, // submit button loading status
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'});
    },
    // 登录
    *accountSubmit({payload}, {call, put}) {
      yield put({
        type: 'save',
        payload: {
          submitting: true
        },
      });
      const response = yield call(fakeAccountLogin, payload);
      yield put({
        type: 'save',
        payload: {
          status: response.status,
          type: response.type
        }
      });
      yield put({
        type: 'save',
        payload: {
          submitting: false
        }
      })
    },
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    }
  },

};
