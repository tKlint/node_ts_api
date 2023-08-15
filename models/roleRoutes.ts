import { DataTypes } from "sequelize";
import sequelize from "./db";

import Routes from "./routes";
import Role from "./role";


const RoleMenu = sequelize.define('RoleMenu', {});

Role.belongsToMany(Routes, { through: RoleMenu });
Routes.belongsToMany(Role, { through: RoleMenu });

export default RoleMenu;
