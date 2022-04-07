import { DataTypes, Model } from 'sequelize';
import db from '../../config/db.js';

class Address extends Model {}

Address.init(
  {
    streetAddress1: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    streetAddress2: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    country: {
      type: DataTypes.TEXT,
      defaultValue: 'USA',
    },
  },
  {
    sequelize: db,
    modelName: 'address',
    timestamps: false,
  }
);

export default Address;
