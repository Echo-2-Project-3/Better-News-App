module.exports = function (sequelize, DataTypes) {
    var Challenge = sequelize.define("Challenge", {
        name: {
            type: DataTypes.STRING
        }, 
        total: {
            type: DataTypes.INTEGER
        },
        trophy: {
            type: DataTypes.STRING,
            defaultValue: 0
        }
    });

    Challenge.associate = function(models) {
        Challenge.belongsToMany(models.User,
            {
                through: models.SubscribedTo
            })
        Challenge.hasMany(models.Post) 
    } 

    return Challenge;
};