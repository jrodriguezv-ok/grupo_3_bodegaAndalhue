const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "Products";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cat_id: dataTypes.INTEGER,

        line: dataTypes.STRING,

        varietal: dataTypes.STRING,

        quality: dataTypes.STRING,

        vintage: dataTypes.STRING,

        display: dataTypes.STRING,

        price: dataTypes.INTEGER,

        discount: dataTypes.STRING,

        tasting: dataTypes.STRING,

        pairing: dataTypes.STRING,

        temperature: dataTypes.STRING,

        image_id: dataTypes.INTEGER,

        datasheet: dataTypes.STRING
    };

    let config = {
        tableName: "Products",
        timestamps: false

    }

    let Product = sequelize.define(alias, cols, config);

    return Product;
}