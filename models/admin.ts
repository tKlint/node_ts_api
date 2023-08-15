/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-05-16 22:05:47
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-05-16 22:09:07
 * @FilePath: \node_ts_api\models\admin.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { DataTypes, Model } from "sequelize";
import sequelize from "./db";

const Admin = sequelize.define(
  'Admin',
  {
    loginId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    loginPwd: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    paranoid: true
  }
)

export default Admin;
