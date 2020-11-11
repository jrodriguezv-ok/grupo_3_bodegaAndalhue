const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "Varietal";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING

    };

    let config = {
        tableName: "varietals",
        timestamps: false

    }

    let Varietal = sequelize.define(alias, cols, config);

    Varietal.associate = function(models) {
        Varietal.hasMany(models.Product, {
            as: "varietals",
            foreignKey: "varietal_id"
        });

    }
    return Varietal;


}