import React, { Component } from 'react';
import { Form, Row, Input, Button, Checkbox } from 'antd';
import './LoginLayout.less';
import { store } from '../store';
import { push } from 'react-router-redux';

import logo from '../../assets/images/logo.png';

const FormItem = Form.Item;

class Login extends Component {

  onLogin = () => {
    store.dispatch(push('/'));
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="form" onSubmit={this.handleSubmit}>
        <div className="login-logo">
          <img src={logo} alt="logo" />
          <span>DEPLOY MANAGER</span>
        </div>

        <Form>
          <FormItem hasFeedback>
            {getFieldDecorator('userName', {
              rules: [{
                required: true,
              }],
            })(<Input size="large" onPressEnter={this.handleSubmit} placeholder="Username" autoComplete="off" />)}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [{
                required: true,
              }],
            })(<Input size="large" type="password" onPressEnter={this.handleSubmit} placeholder="Password" autoComplete="off" />)}
          </FormItem>
          <Row>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住我</Checkbox>
              )}
            <a className="login-form-forgot" href="">忘记密码</a>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="login-form-button"
              loading={false}
              onClick={this.onLogin}
            >
              登录
            </Button>
            <a href="">注册</a>
          </Row>

        </Form>
      </div>
    )
  }
}

const LoginLayout = Form.create()(Login);

export default LoginLayout;
