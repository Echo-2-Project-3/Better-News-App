module.exports = function (sequelize, DataTypes) {
    var SubscribedTo = sequelize.define("SubscribedTo", { 
        point: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        trophy: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        percent_completed: {
            type: DataTypes.INTEGER, 
            defaultValue: 0
        }
    });

    return SubscribedTo;
};