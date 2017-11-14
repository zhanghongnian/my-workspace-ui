import React, { Component } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Spin } from 'antd';
import { ConnectedRouter } from 'react-router-redux';
import { store, history } from './store';

import './app.less';

import Bundle from './lazyLoad';
import BasicLayout from 'bundle-loader?lazy&name=BasicLayout!./layouts/BasicLayout';
import LoginLayout from 'bundle-loader?lazy&name=LoginLayout!./layouts/LoginLayout';

const createComponent = (component) =>
  () => {
    let AsyncComponent = (
      <Bundle load={component}>
        {
          (Async) => Async ? <Async /> : <Spin className="center" tip="Loading module ..." />
        }
      </Bundle>
    )
    return AsyncComponent;
  }

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
