module.exports = function(sequelize, DataTypes){
    let alias = "User";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        contrasena: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE,
        },
    };
    let config = {
        tableName: "usuarios",
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);
    User.associate = function(models){
        User.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "idusuario"
        });
    };
    return User;
}