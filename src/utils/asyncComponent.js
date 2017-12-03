import React, { Component } from 'react';
import { Spin } from 'antd';
import Bundle from '../lazyLoad';

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

  export default createComponent;
