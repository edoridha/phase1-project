'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      this.hasOne(models.Profile)
      this.hasMany(models.CourseCategory)
      this.belongsToMany(models.Course,{
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
        notNull:{
          msg: `Email is Required`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Email is Required`
        },
        notNull:{
          msg: `Email is Required`
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Email is Required`
        },
        notNull:{
          msg: `Email is Required`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};