/* const config = require("../config/config") */

module.exports = function(sequelize, dataTypes) {
    let alias = "Brand";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING

    };

    let config = {
        tableName: "brands",
        timestamps: false
    }

    let Brand = sequelize.define(alias, cols, config);

    Brand.associate = function(models) {
        Brand.hasMany(models.Product, {
            as: "brands",
            foreignKey: "brand_id"
        });

    }

    return Brand;
}