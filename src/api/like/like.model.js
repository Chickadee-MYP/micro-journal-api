import { DataTypes, Model } from 'sequelize';
import db from '../../config/db.js';

const uppercaseFirst = (str) => `${str[0].toUpperCase()}${str.substr(1)}`;

class Like extends Model {
  getLikable(options) {
    if (!this.likableType) return Promise.resolve(null);
    const mixinMethodName = `get${uppercaseFirst(this.likableType)}`;
    return this[mixinMethodName](options);
  }
}

Like.init(
  {
    likableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    likableType: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: 'like',
    timestamps: false,
  }
);

export default Like;
