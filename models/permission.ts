import { DataTypes, Model } from "sequelize";
import sequelize from "./db";

type PermissionType = {
  name: string;
  description?: string;
}

const Permission = sequelize.define<Model<PermissionType>>('Permission', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
  },
});

export default Permission;