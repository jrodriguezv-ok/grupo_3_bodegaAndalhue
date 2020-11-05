const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "Cart_product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cart_id: dataTypes.INTEGER,

        product_id: dataTypes.INTEGER,

        quantity: dataTypes.INTEGER,

        frozen_price: dataTypes.INTEGER

    };

    let config = {
        tableName: "Cart_product",
        timestamps: false

    }

    let Cart_product = sequelize.define(alias, cols, config);

    return Cart_product;
}