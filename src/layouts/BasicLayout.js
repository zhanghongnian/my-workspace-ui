import React, { Component } from 'react';
import { Layout, Menu, Icon, Badge, Avatar } from 'antd';
import { Route, Switch, Link } from 'react-router-dom';
import { store } from '../store';
import { push } from 'react-router-redux';

import ExchangeRate from '../components/Echarts/ExchangeRate'

import './BasicLayout.less';
import logo from '../../assets/images/logo.png';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;


class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,  // 边栏收缩状态
    }
  }

  menuClick = (e) => {
    switch (e.key) {
      case 'logout':
        store.dispatch(push('/login'));
        break;
      default:
        console.error('wrong menu key');
    }
  }

  render() {
    return (
      <Layout className="sider">
        <Sider
          collapsed={this.state.collapsed}
        >
          <div className='logo'>
            <img src={logo} alt='logo' />
            {this.state.collapsed ? '' : <span>my-workspace</span>}
          </div>
          <Menu
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="/dashboard">
              <Icon type="rocket" />
              <span>Dashboard</span>
            </Menu.Item>
            <SubMenu key="/echarts" title={<span><Icon type="echarts" /><span>ECharts</span></span>}>
              <Menu.Item key="/echarts/">
                <Link to="/echarts/line">
                  折线图
                </Link>
              </Menu.Item>
              <Menu.Item key="/echarts/process">
                地图
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="/file_manage">
              <Icon type="folder" />
              <span style={{ display: 'inline' }}>
                文件管理
                </span>
            </Menu.Item>
            <Menu.Item key="/setting">
              <Icon type="setting" />
              <span>设置</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={() => this.setState({ collapsed: !this.state.collapsed })}
            />
            <Menu   // todo Menu 样式不对劲
              mode="horizontal"
              className="right"
              onClick={this.menuClick}
            >
              <SubMenu title={<span className="avatar"><Avatar>Z</Avatar>zhnliving</span>}>
                <Menu.Item key="setting"><Icon type="setting" />个人设置</Menu.Item>
                <Menu.Item key="logout"><Icon type="logout" />退出登录</Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route path="/echarts/line" component={ExchangeRate} />
            </Switch>
          </Content>
          <Footer className="footer">
            my-workspace ©2017 Created by zhnliving
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout;
