import { DataTypes, Model } from 'sequelize';
import db from '../../config/db.js';

class Comment extends Model {
}

Comment.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: 'comment',
    timestamps: true,
  }
);

export default Comment;
