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
        tableName: "cart_product",
        timestamps: false

    }

    let Cart_product = sequelize.define(alias, cols, config);

    Cart_product.associate = function(models) {
        Cart_product.belongsToMany(models.Product, {
            as: "cart_product",
            foreignKey: "product_id"
        });

        Cart_product.belongsToMany(models.Cart, {
            as: "cart_product",
            foreignKey: "cart_id"
        });

        return Cart_product;
    }


}