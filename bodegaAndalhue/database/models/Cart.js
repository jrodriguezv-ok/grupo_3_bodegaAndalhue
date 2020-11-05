const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "Cart";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: dataTypes.INTEGER,

        user_id: dataTypes.INTEGER,

        creation_date: dataTypes.DATE,

        date_of_purchase: dataTypes.DATE,

        state: dataTypes.STRING,

        total: dataTypes.INTEGER

    };

    let config = {
        tableName: "Cart",
        timestamps: false

    }

    let Cart = sequelize.define(alias, cols, config);

    return Cart;
}