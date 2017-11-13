import React from 'react';
import { Link, Route } from 'dva/router';
import DocumentTitle from 'react-document-title';
import GlobalFooter from '../components/GlobalFooter';
import { getRouteData } from '../utils/utils';

const links = [
  {
    title: '帮助',
    href: '',
  }, {
    title: '隐私',
    href: '',
  }, {
    title: '条款',
    href: '',
  }
];
const copyright = 'Copyright 2018 wangxin Code';
class UserLayout extends React.PureComponent {
  render() {
    const userRouteData = getRouteData('UserLayout');
    console.log('userRouterData=', userRouteData);
    return (
      <DocumentTitle title="我的title">
        <div>
          {
            getRouteData('UserLayout').map(item =>
              (
                <Route
                  exact={item.exact}
                  key={item.path}
                  path={item.path}
                  component={item.component}
                />
              )
            )
          }
          <GlobalFooter links={links} copyright={copyright}/>
        </div>
      </DocumentTitle>
    );
  }
}
export default UserLayout;
