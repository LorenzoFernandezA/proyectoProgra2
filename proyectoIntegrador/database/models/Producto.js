module.exports= function(sequelize, DataTypes) { 
    
    let alias = "Producto";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
    };
    let config = {
        tableName: "productos",
        timestamps: false
    }
    const Producto = sequelize.define(alias, cols, config);
    Producto.associate = function(models){
        Producto.belongsTo(models.User, {
            as: "user",
            foreignKey: "usuarioId",
        });
    };
    return Producto;
}