'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      this.hasMany(models.CourseCategory)

      this.belongsToMany(models.Course, {
          through:models.CourseCategory
      })
      this.belongsToMany(models.User, {
        through: models.CourseCategory
      })
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