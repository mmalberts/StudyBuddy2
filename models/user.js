var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
var User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1,50]
      }
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1,50]
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1,50]
      }
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1,100]
      }
    }
  }, {
    timestamps: false
  });
  
  User.associate = function(models) {
    User.hasMany(models.Unit, {
        onDelete: "cascade"
    });
  };

  return User;
};

