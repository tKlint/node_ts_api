import express from 'express'
import adminServ from '../../services/adminService'
import { publish } from '../jwt';

const route = express.Router();

route.post('/login',  async (req, resp) => {
  // admin
  const result = await adminServ.login(req.body.loginId, req.body.loginPwd)
  if (result) {
    let value = result.id;
    // 登录成功
    publish(resp, 3600 * 24 * 7, { id: value });
  }
  resp.send(result)
})

export default route