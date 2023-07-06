'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, {
        through: models.CourseCategory
        
      })
      this.belongsToMany(models.Category, {
        through:models.CourseCategory
      })
    }
  }
  Course.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Title is Require`
        },
        notNull: {
          msg: `Title is Require`
        }
      }
    },
    url:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `url is Require`
        },
        notNull: {
          msg: `url is Require`
        }
      }
    },
    CourseCategoryId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `UserId is Require`
        },
        notNull: {
          msg: `UserId is Require`
        }
      }
    },
    CourseCategoryUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `UserId is Require`
        },
        notNull: {
          msg: `UserId is Require`
        }
      }
    },
    CourseCategoryCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `UserId is Require`
        },
        notNull: {
          msg: `UserId is Require`
        }
      }
    },
  },
  
    {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};