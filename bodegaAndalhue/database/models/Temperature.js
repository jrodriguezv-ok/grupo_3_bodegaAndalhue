/* const config = require("../config/config") */

module.exports = function(sequelize, dataTypes) {
    let alias = "Temperature";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: dataTypes.INTEGER

    };

    let config = {
        tableName: "temperatures",
        timestamps: false

    }

    let Temperature = sequelize.define(alias, cols, config);

    Temperature.associate = function(models) {
        Temperature.hasMany(models.Product, {
            as: "temperatures",
            foreignKey: "temperature_id"
        });

    }
    return Temperature;
}