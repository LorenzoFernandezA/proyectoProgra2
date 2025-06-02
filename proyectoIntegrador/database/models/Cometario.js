module.exports = function(sequelize, DataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        texto: {
            type: DataTypes.STRING
        },
        producto_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: "comentarios",
        timestamps: false
    }
    const Comentario = sequelize.define(alias, cols, config);
    
    Comentario.associate = function(models) {
    Comentario.belongsTo(models.User, {
        as: "user",
        foreignKey: "user_id"
    });

    Comentario.belongsTo(models.Producto, {
        as: "producto",
        foreignKey: "producto_id"
    });
    };
    return Comentario;
}