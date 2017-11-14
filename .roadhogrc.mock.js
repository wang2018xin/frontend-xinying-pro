import { format, delay } from 'roadhog-api-doc';

const proxy = {
  'GET /api/currentUser': {
    $desc: "获取当前用户接口",
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/dRFVcIqZOYPcSNrlJsqQ.png',
      userid: '00000001',
      notifyCount: 12,
    },
  },
  'POST /api/login/account': (req, res) => {
    const {password, userName} = req.body;
    res.send({status: password === '888888' && userName === 'admin' ? 'ok' : 'error', type: 'account'});
  },
}


export default delay(proxy, 1000);
