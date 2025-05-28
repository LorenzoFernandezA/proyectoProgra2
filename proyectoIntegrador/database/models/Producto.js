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
        }
    };
    let config = {
        tableName: "productos",
        timestamps: false
    }
    const Producto = sequelize.define(alias, cols, config);
    return Producto;
}