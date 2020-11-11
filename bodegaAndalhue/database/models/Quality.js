const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "Quality";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING

    };

    let config = {
        tableName: "qualities",
        timestamps: false

    }

    let Quality = sequelize.define(alias, cols, config);

    Quality.associate = function(models) {
        Quality.hasMany(models.Product, {
            as: "qualities",
            foreignKey: "quality_id"
        });

    }
    return Quality;


}