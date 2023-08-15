import { DataTypes } from "sequelize";
import sequelize from "./db";

import Permission from "./permission";
import Role from "./role";


const RolePermission = sequelize.define('RolePermission', {});

Role.belongsToMany(Permission, { through: RolePermission });
Permission.belongsToMany(Role, { through: RolePermission });

RolePermission.belongsTo(Role);
RolePermission.belongsTo(Permission);

export default RolePermission;
