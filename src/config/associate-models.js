import Author from '../api/author/author.model.js';
import Address from '../api/address/address.model.js';

async function associateModels() {
  Address.hasMany(Author);
  Author.belongsTo(Address);
  // Post.hasMany(Like, {
  //   foreignKey: 'likeableId',
  //   constraints: false,
  //   scope: {
  //     activeType: 'post',
  //   },
  // });
  // Like.belongsTo(Post, { foreignKey: 'activeId', constraints: false });
  // Box.hasMany(Activity, {
  //   foreignKey: 'activeId',
  //   constraints: false,
  //   scope: {
  //     activeType: 'box',
  //   },
  // });
  // Activity.belongsTo(Box, { foreignKey: 'activeId', constraints: false });
  // Warehouse.hasMany(Activity);
  // Activity.belongsTo(Warehouse);
  // User.hasMany(Activity);
  // Activity.belongsTo(User);
  // Activity.addHook('afterFind', findResult => {
  //   // eslint-disable-next-line no-param-reassign
  //   if (!Array.isArray(findResult)) findResult = [findResult];
  //   // eslint-disable-next-line no-restricted-syntax
  //   for (const instance of findResult) {
  //     if (instance.activeType === 'pallet' && instance.pallet !== undefined) {
  //       instance.active = instance.pallet;
  //     } else if (
  //       instance.commentableType === 'box' &&
  //       instance.box !== undefined
  //     ) {
  //       instance.active = instance.box;
  //     }
  //     delete instance.pallet;
  //     delete instance.dataValues.pallet;
  //     delete instance.box;
  //     delete instance.dataValues.box;
  //   }
  // });
  // Pallet.addHook('afterCreate', (pallet) => {
  // Pallet.addHook('beforeDestroy', pallet => {
  //   pallet.addActivity({ activeType: 'remove' });
  // });
}

export default associateModels;
