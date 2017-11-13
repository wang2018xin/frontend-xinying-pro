import React, { Component } from 'react';
import { connect } from 'dva';
import { routerRedux, Link } from 'dva/router';

import styles from './Register.less';


@connect(state => ({
  register: state.register
}))

export default class Register extends Component {
  render() {
    return (
      <div>Register...</div>
    );
  }
}
