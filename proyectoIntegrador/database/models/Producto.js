module.exports= function(sequelize, DataTypes) { 
    
    let alias = "Producto";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUsuario: {
            type: DataTypes.INTEGER.UNSIGNED
        },
        nombre: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.STRING
        },
        nombreArchivoFoto: {
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
        tableName: "productos",
        timestamps: true
    }
    const Producto = sequelize.define(alias, cols, config);
    Producto.associate = function(models){
        Producto.belongsTo(models.User, {
            as: "user",
            foreignKey: "idUsuario",
        });
    Producto.hasMany(models.Comentario, {
        as: "comentarios",
        foreignKey: "producto_id"
    });
    };
    return Producto;
}