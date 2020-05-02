module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        name: {
            type: DataTypes.STRING
        }, 
        point: {
            type: DataTypes.INTEGER
        },
        
    });

    Post.associate = function(models) {
        Post.belongsTo(models.Challenge) 
    } 

    return Post;
};