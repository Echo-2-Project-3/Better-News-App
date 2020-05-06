module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        content: {
            type: DataTypes.STRING
        }
    });

    Post.associate = function(models) {
        Post.belongsTo(models.Challenge) 
    } 

    return Post;
};