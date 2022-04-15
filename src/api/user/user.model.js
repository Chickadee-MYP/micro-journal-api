import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';
import db from '../../config/db.js';

class User extends Model {
  async isValidPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    suffix: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    prefix: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.prefix ? this.prefix : ''} ${this.firstName} ${
          this.lastName
        } ${this.suffix ? this.suffix : ''}`.trim();
      },
      // eslint-disable-next-line no-unused-vars
      set(value) {
        throw new Error('Do not try to set the fullName value!');
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'user',
    timestamps: true,
    defaultScope: {
      attributes: [
        'prefix',
        'firstName',
        'lastName',
        'suffix',
        'fullName',
        'username',
      ],
    },
    scopes: {
      auth: {},
    },
    hooks: {
      beforeCreate: async user => {
        const salt = await bcrypt.genSalt(10);
        // eslint-disable-next-line no-param-reassign
        user.password = await bcrypt.hash(user.password, salt);
      },
      beforeUpdate: async user => {
        const salt = await bcrypt.genSalt(10);
        // eslint-disable-next-line no-param-reassign
        user.password = await bcrypt.hash(user.password, salt);
      },
    },
  }
);

export default User;
