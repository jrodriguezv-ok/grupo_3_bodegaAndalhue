const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "Display";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING

    };

    let config = {
        tableName: "displays",
        timestamps: false

    }

    let Display = sequelize.define(alias, cols, config);

    Display.associate = function(models) {
        Display.hasMany(models.Product, {
            as: "displays",
            foreignKey: "display_id"
        });

    }
    return Display;
}