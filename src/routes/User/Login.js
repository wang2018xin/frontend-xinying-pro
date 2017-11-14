import React, { Component } from 'react';
import { Form, Input, Tabs, Button, Icon, Checkbox, Row, Col, Alert } from 'antd';
import { connect } from 'dva';
import { routerRedux, Link } from 'dva/router';
import styles from './Login.less';
const FormItem = Form.Item;

@connect(state => ({
  login: state.login
}))
@Form.create()

export default class Login extends Component {


  componentWillReceiveProps(nextProps) {
    if (nextProps.login.status === 'ok') {
      this.props.dispatch(routerRedux.push('/'));
    }
  }

  // 登录状态提示信息
  alertMsg = (message) => {
    return (
      <Alert
        style={{ marginBottom: 24 }}
        message={message}
        type="error"
        showIcon
      />
    );
  }

  // 登录表单提交
  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'login/accountSubmit',
          payload: values
        })
      }
    });
  }

  render() {
    const {form, login} = this.props;
    const {getFieldDecorator} = form;
    return (
      <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
        {
          login.status === 'error' &&
          login.type === 'account' &&
          login.submitting === false &&
          this.alertMsg('账户或密码错误')
        }
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{required: true, message: 'Please input your username!'}],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: 'Please input your Password!'}],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className={styles.loginFormForgot} href="">Forgot password</a>
          <Button type="primary" htmlType="submit" loading={login.submitting} className={styles.loginFormButton}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}
