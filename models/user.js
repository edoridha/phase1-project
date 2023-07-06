'use strict';
const bcrypt = require('bcryptjs');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      this.hasOne(models.Profile)
      this.hasMany(models.CourseCategory)
      this.belongsToMany(models.Course, {
        through: models.CourseCategory
      })
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Email is Required`
        },
        notNull: {
          msg: `Email is Required`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Password is Required`
        },
        notNull: {
          msg: `Password is Required`
        }
      }
    },
    role: DataTypes.STRING,
   
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user, options) => {
    user.role = 'User';
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(user.password, salt);
    user.password = hash
  });
  return User;
};