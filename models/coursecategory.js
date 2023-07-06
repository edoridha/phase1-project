'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CourseCategory extends Model {

    static associate(models) {
      this.belongsTo(models.User)
      this.belongsTo(models.Category)
      this.hasMany(models.Course)
    }
  }
  CourseCategory.init({
    CategoryId: {
      type: DataTypes.INTEGER,
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
    UserId: {
      type: DataTypes.INTEGER,
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
    modelName: 'CourseCategory',
  });
  return CourseCategory;
};