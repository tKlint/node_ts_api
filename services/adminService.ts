/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-16 22:30:31
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-05-16 23:46:51
 * @FilePath: \node_ts_api\services\adminService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import md5 from 'md5'
import Admin from '../models/admin';
import { Model } from 'sequelize/types'
import { AdminServiceType } from './type';

export async function addAdmin(params: AdminServiceType.AddAdminParams) {
  params.loginPwd = md5(params.loginPwd);
  const ins = await Admin.create(params);
  return ins.toJSON();
}

export async function login(loginId: string, loginPwd: string) {
  loginPwd = md5(loginPwd)
  const result = await Admin.findOne<Model<AdminServiceType.AddAdminParams>>({
    where: {
      loginId,
      loginPwd
    },
    attributes: ['loginId', 'id']
  })
  if (result) {
    console.log(result, 'ser')
    return result?.toJSON()
  }
  return null;
} 

export default {
  login,
  addAdmin
}