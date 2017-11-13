import BasicLayout from '../layouts/BasicLayout';
import UserLayout from '../layouts/UserLayout';

import Analysis from '../routes/Dashboard/Analysis';
import Monitor from '../routes/Dashboard/Monitor';
import Workplace from '../routes/Dashboard/Workplace';

import TableList from '../routes/List/TableList';
import CoverCardList from '../routes/List/CoverCardList';

import Login from '../routes/User/Login';
import Register from '../routes/User/Register';
import RegisterResult from '../routes/User/RegisterResult';

const data = [
  {
    component: BasicLayout,
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '',
    children: [
      {
        name: 'Dashboard',
        icon: 'dashboard',
        path: 'dashboard',
        children: [
          {
            name: '分析页',
            path: 'analysis',
            component: Analysis,
          }, {
            name: '监控页',
            path: 'monitor',
            component: Monitor,
          }, {
            name: '工作台',
            path: 'workplace',
            component: Workplace,
          }
        ],
      }, {
        name: '列表页',
        path: 'list',
        icon: 'table',
        children: [
          {
            name: '查询表格',
            path: 'table-list',
            component: TableList,
          }, {
            name: '标准列表',
            path: 'cover-card-list',
            component: CoverCardList,
          }
        ],
      }
    ],
  }, {
    component: UserLayout,
    layout: 'UserLayout',
    children: [
      {
        name: '帐户',
        icon: 'user',
        path: 'user',
        children: [
          {
            name: '登录',
            path: 'login',
            component: Login,
          }, {
            name: '注册',
            path: 'register',
            component: Register,
          }, {
            name: '注册结果',
            path: 'register-result',
            component: RegisterResult,
          }
        ]
      }
    ]
  }
];

export function getNavData() {
  return data;
}

export default data;
