import React, { Component } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Spin } from 'antd';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './store';

import './app.less';

import BasicLayout from 'bundle-loader?lazy&name=BasicLayout!./layouts/BasicLayout';
import LoginLayout from 'bundle-loader?lazy&name=LoginLayout!./layouts/LoginLayout';

import createComponent from './utils/asyncComponent';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/login" component={createComponent(LoginLayout)} />
            <Route path="/" component={createComponent(BasicLayout)} />
            <Redirect to="/" />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}
