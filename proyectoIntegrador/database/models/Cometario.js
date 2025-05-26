module.exports = function(sequelize, DataTypes) {
    let alias = "Comentario";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comentario: {
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
    return Comentario;
}