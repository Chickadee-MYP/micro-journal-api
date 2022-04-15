import User from '../api/user/user.model.js';
import Address from '../api/address/address.model.js';
import Post from '../api/post/post.model.js';
import Comment from '../api/comment/comment.model.js';
import Like from '../api/like/like.model.js';

async function associateModels() {
  Address.hasMany(User);
  User.belongsTo(Address);

  User.hasMany(Post);
  Post.belongsTo(User);

  User.hasMany(Comment);
  Comment.belongsTo(User);

  Post.hasMany(Comment);
  Comment.belongsTo(Post);

  Post.hasMany(Like, {
    foreignKey: 'likableId',
    constraints: false,
    scope: {
      likableType: 'post',
    },
  });
  Like.belongsTo(Post, { foreignKey: 'likableId', constraints: false });

  Comment.hasMany(Like, {
    foreignKey: 'likableId',
    constraints: false,
    scope: {
      likableType: 'comment',
    },
  });
  Like.belongsTo(Comment, { foreignKey: 'likableId', constraints: false });

  User.hasMany(Like);
  Like.belongsTo(User);

  Like.addHook('afterFind', findResult => {
    // eslint-disable-next-line no-param-reassign
    if (!Array.isArray(findResult)) findResult = [findResult];
    // eslint-disable-next-line no-restricted-syntax
    for (const instance of findResult) {
      if (instance.likableType === 'post' && instance.post !== undefined) {
        instance.likable = instance.post;
      } else if (
        instance.likableType === 'comment' &&
        instance.comment !== undefined
      ) {
        instance.likable = instance.comment;
      }
      delete instance.post;
      delete instance.dataValues.post;
      delete instance.comment;
      delete instance.dataValues.comment;
    }
  });
}

export default associateModels;
