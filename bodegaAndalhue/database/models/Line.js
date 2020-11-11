const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "Line";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING

    };

    let config = {
        tableName: "Lines",
        timestamps: false
    }

    let Line = sequelize.define(alias, cols, config);

    Line.associate = function(models) {
        Line.hasMany(models.Product, {
            as: "lines",
            foreignKey: "line_id"
        });

    }

    return Line;
}