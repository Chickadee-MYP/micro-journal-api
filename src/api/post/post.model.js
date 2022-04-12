import { DataTypes, Model } from 'sequelize';
import db from '../../config/db.js';

class Post extends Model {
}

Post.init(
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'post',
    timestamps: true,
  }
);

export default Post;
