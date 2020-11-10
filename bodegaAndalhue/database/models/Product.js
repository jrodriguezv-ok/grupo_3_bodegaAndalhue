const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "Product";

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
        image: dataTypes.STRING,
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
        Product.belongsTo(models.Line, {
            as: "lines",
            foreignKey: "line_id"
        });
        Product.belongsTo(models.Varietal, {
            as: "varietals",
            foreignKey: "varietal_id"
        });
        Product.belongsTo(models.Quality, {
            as: "qualities",
            foreignKey: "quality_id"
        });
        Product.belongsTo(models.Display, {
            as: "displays",
            foreignKey: "display_id"
        });
        Product.belongsTo(models.Temperature, {
            as: "temperatures",
            foreignKey: "temperature_id"
        });

        Product.belongsToMany(models.Cart, {
            as: "carts",
            through: "cart_product",
            foreignKey: "product_id",
            otherKey: "cart_id",
            timestamps: false
        });
        return Product;
    }

}