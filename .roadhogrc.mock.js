import { format, delay } from 'roadhog-api-doc';

const proxy = {
  'POST /api/login/account': (req, res) => {
    console.log('body==', req.body);
    const {password, userName} = req.body;

    res.send({status: password === '888888' && userName === 'admin' ? 'ok' : 'error', type: 'account'});
  },
}


export default delay(proxy, 1000);
