import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { ContainerQuery } from 'react-container-query';
import DocumentTitle from 'react-document-title';
import classNames from 'classnames';
import { Link, Route, Redirect, Switch } from 'dva/router';
import { connect } from 'dva';

import styles from './BasicLayout.less';

const {Header, Sider, Content} = Layout;


const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

export default class BasicLayout extends React.PureComponent {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const layout = (<Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <div className={styles.logo}/>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user"/>
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera"/>
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload"/>
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className={styles.trigger}
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
          Content
        </Content>
      </Layout>
    </Layout>);

    return (
      <DocumentTitle title='仪表盘'>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}



