const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "Temperature";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING

    };

    let config = {
        tableName: "temperatures",
        timestamps: false

    }

    let Temperature = sequelize.define(alias, cols, config);

    Temperature.associate = function(models) {
        Temperature.hasMany(models.Product, {
            as: "products",
            foreignKey: "temperature_id"
        });
        return Temperature;
    }
}