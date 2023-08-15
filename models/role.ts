import { DataTypes, Model } from "sequelize";
import sequelize from "./db";


export type RoleType = {
  name: string;
  description: string;
}

const Role = sequelize.define<Model<RoleType>>(
  'Role', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    paranoid: true
  }
);

export default Role;
