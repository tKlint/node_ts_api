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
import Role, { RoleType } from '../models/role';
import Permission from '../models/permission';
import Routes from '../models/routes';
import { AdminServiceType } from './type';

export async function addAdmin(params: AdminServiceType.AddAdminParams) {
  params.loginPwd = md5(params.loginPwd);
  const ins = await Admin.create(params);
  return ins.toJSON();
}
export async function isUserExisted(loginId: string) {
  const result = await Admin.findOne({
    where: {
      loginId
    },
    attributes: ['id']
  });
  if (result) {
    return true;
  }
  return false;
}
export async function login(loginId: string, loginPwd: string) {
  loginPwd = md5(loginPwd)
  const result = await Admin.findOne<Model<AdminServiceType.AddAdminParams>>({
    where: {
      loginId,
      loginPwd
    },
    attributes: ['loginId', 'id', 'email']
  })
  if (result) {
    return result?.toJSON()
  }
  return null;
}

export async function getAdmins () {
  const result = await Admin.findAll();
  return JSON.parse(JSON.stringify(result));
};


async function getAdminById (id: number) {
  const result = await Admin.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};

async function whoamiByIdLoginId(loginId: string){
  try {
    // 查找用户信息
    const user = await Admin.findOne({
      where: { loginId },
      include: [
        {
          model: Role,
          through: { attributes: [] }, // 不返回关联关系中的属性
          include: [
            {
              model: Permission,
            },
            {
              model: Routes,
            },
          ],
        },
      ],
    });
    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    console.error('Error fetching user info:', error);
    return null;
  }
}

export default {
  login,
  addAdmin,
  isUserExisted,
  getAdmins,
  getAdminById,
  whoamiByIdLoginId
}