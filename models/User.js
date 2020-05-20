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
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4]
        }
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      doppel_me: {
        type: DataTypes.STRING, 
        allowNull: true,
        defaultValue: "DM1732409GPK"
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
      User.hasMany(models.Post) 
    }
    
    return User;
  };