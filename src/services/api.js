import { stringify } from 'qs';
import request from '../utils/request';

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}
