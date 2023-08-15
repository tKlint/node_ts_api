import express from 'express'
import adminServ from '../../services/adminService'
import { publish } from '../jwt';
import Validator from '../../utils/Validator';
import { getErr, getResult } from '../getSendResult';

const route = express.Router();

route.post('/login',  async (req, resp) => {
  // admin
  const result = await adminServ.login(req.body.loginId, req.body.loginPwd)
  if (result) {
    let value = result.id;
    // 登录成功
    publish(resp, 3600 * 24 * 7, { id: value });
    return resp.send(getResult(result));
  }
  return resp.send(getErr('User is not found'));
})

route.get('/user', (req, resq) => {
  resq.send([
    { id: 1 }
  ])
})

route.put('/signup', async (req, resp) => {
  const params = req.body;
  const [flag, invalidParams] = Validator.validateRequstParams([
    {
      key: 'email',
      valueType: 'email',
      value: params.email
    }, {
      key: 'password',
      valueType: 'string',
      value: params.password
    }
  ]);

  if (await adminServ.isUserExisted(params.email)) {
    return resp.send(getErr(`User email ${params.email} is existed.`));
  }
  if(flag) {
    const result = await adminServ.addAdmin({
      loginId: params.email,
      loginPwd: params.password,
      email: params.email,
    });
    return resp.send(getResult({}));
  }
  resp.send(getErr(`${invalidParams.key} is not a ${invalidParams.valueType.toUpperCase()}`));
})

route.get("/whoami", async (req, resp) => {
  const params = req.query as Record<string, string>;
  console.log(params, 'paramsparamsparams');
  const [flag, invalidParams] = Validator.validateRequstParams([
    {
      key: 'loginId',
      valueType: 'string',
      value: params.loginId,
      require: true
    }
  ]);

  if (!flag) {
    return resp.send(getErr(`${invalidParams.key} is not a ${invalidParams.valueType.toUpperCase()}`));
  }
  const user = await adminServ.whoamiByIdLoginId(params.loginId);
  if (!user){
    return resp.send(getErr(`${params.loginId} is not existed`))
  }
  resp.send(getResult(user));
})

export default route