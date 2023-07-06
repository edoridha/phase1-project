'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {

    

    static associate(models) {
      this.belongsTo(models.User)
    }
  }
  Profile.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `First Name is Require`
        },
        notNull: {
          msg: `First Name is Require`
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: `Last Name is Require`
        },
        notNull: {
          msg: `Last Name is Require`
        }
      }
    },
    fullName: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.firstName} ${this.lastName}`
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Age is required",
        },
        notEmpty: {
          msg: "Age is required",
        },
        is17YearsOld() {
          if (this.age < 13) {
            throw new Error("Only 13+ are allowed!");
          }
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};