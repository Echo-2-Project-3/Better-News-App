module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      interest: {
        type: DataTypes.STRING,
        defaultValue: "Personal  Interest"
      }
    });

    User.associate = function(models) {
      User.belongsToMany(models.Challenge,
        {
        through: models.SubscribedTo
      });
    }
    return User;
  };