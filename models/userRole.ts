import { DataTypes } from "sequelize";
import sequelize from "./db";// 初始化的 Sequelize 实例

import Admin from './admin'
import Role from './role'


const UserRole = sequelize.define('UserRole', {});

Admin.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(Admin, { through: UserRole });

UserRole.belongsTo(Admin);
UserRole.belongsTo(Role);

export default UserRole;
