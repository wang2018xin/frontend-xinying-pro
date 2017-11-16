import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { fakeSubmitForm } from '../services/api';

export default {

  namespace: 'form',

  state: {
    submitting: false
  },

  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({payload}, {call, put}) {  // eslint-disable-line
      yield put({type: 'save'});
    },
    *submitRegularForm({payload}, {call, put}) {
      console.log('submitRegularForm', payload);
      yield put({
        type: 'save',
        payload: {
          submitting: true
        }
      });
      const response = yield call(fakeSubmitForm, payload);
      console.log('response===', response);
      yield put({
        type: 'save',
        payload: {
          submitting: false
        }
      });
      if (response.message === 'ok') {
        message.success('提交成功');
      } else {
        message.error('提交失败');
      }
    }
  },

  reducers: {
    save(state, action) {
      return {...state, ...action.payload};
    },
  },

};
