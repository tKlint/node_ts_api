import express from 'express'
import adminServ from '../../services/adminService'

const route = express.Router();

route.post('/login',  async (req, resp) => {
  // admin
  const result = await adminServ.login(req.body.loginId, req.body.loginPwd)
  // console.log(req.body)
  resp.send(result)
})

export default route