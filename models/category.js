'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      this.hasMany(models.CourseCategory)
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Name is Require`
        },
        notNull: {
          msg: `Name is Require`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};