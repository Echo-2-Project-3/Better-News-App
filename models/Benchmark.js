module.exports = function(sequelize, DataTypes) {
    var Benchmark = sequelize.define("Benchmark", {
        bronze: {
            type: DataTypes.INTEGER,
            defaultValue: 25
        },
        silver: {
            type: DataTypes.INTEGER,
            defaultValue: 50
        },
        gold: {
            type: DataTypes.INTEGER,
            defaultValue: 75
        },
        platinum: {
            type: DataTypes.INTEGER,
            defaultValue: 100
        }
    });

    Benchmark.associate = function(models) {
        Benchmark.hasMany(models.Challenge)
    }
    

    return Benchmark;
}