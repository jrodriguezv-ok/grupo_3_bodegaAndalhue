const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "products";

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

        price: dataTypes.DECIMAL,

        discount: dataTypes.INTEGER,

        tasting: dataTypes.STRING,

        pairing: dataTypes.STRING,

        temperature: dataTypes.DECIMAL,

        image_id: dataTypes.INTEGER,

        datasheet: dataTypes.STRING
    };

    let config = {
        tableName: "products",
        timestamps: false

    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "cat_id"
        });
        return products;
    }

}