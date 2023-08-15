import { DataTypes } from "sequelize";
import sequelize from "./db";
import Role from './role'

const Routes = sequelize.define(
  'Routes',
  {
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    parentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'routes',
        key: 'id',
      }, 
    },
    isShown: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    layout: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    redirect: {
      type: DataTypes.STRING,
    },
    component: {
      type: DataTypes.STRING,
    }
  },
  {
    paranoid: true,
    indexes: [
      {
        unique: true,
        fields: ['path']
      },
      {
        fields: ['parentId']
      }
    ]
  }
)

export default Routes;
