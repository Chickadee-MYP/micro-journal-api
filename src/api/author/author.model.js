import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';
import db from '../../config/db.js';

class Author extends Model {
  async isValidPassword(password) {
    return bcrypt.compare(password, this.password);
  }
}

Author.init(
  {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: false,
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
    modelName: 'author',
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
    hooks: {
      beforeCreate: async author => {
        const salt = await bcrypt.genSalt(10);
        // eslint-disable-next-line no-param-reassign
        author.password = await bcrypt.hash(author.password, salt);
      },
      beforeUpdate: async author => {
        const salt = await bcrypt.genSalt(10);
        // eslint-disable-next-line no-param-reassign
        author.password = await bcrypt.hash(author.password, salt);
      },
    },
  }
);

export default Author;
