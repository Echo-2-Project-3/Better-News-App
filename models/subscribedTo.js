module.exports = function (sequelize, DataTypes) {
    var SubscribedTo = sequelize.define("SubscribedTo", {
        user: {
            type: DataTypes.STRING
        }, 
        point: {
            type: DataTypes.INTEGER
        },
        trophy: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    return SubscribedTo;
};