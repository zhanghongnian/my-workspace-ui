import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './app.less';

import BasicLayout from './layouts/BasicLayout';


export default class App extends Component {
  render() {
    return (
      <BasicLayout />
    )
  }
}
