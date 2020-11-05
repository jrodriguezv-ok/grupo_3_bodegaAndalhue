const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "Images_products";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        route: dataTypes.STRING,

        product_id: dataTypes.INTEGER,

    };

    let config = {
        tableName: "Images_products",
        timestamps: false

    }

    let Image_product = sequelize.define(alias, cols, config);

    return Image_product;
}