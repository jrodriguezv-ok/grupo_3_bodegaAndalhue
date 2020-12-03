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
        brand_id: dataTypes.INTEGER,
        varietal_id: dataTypes.INTEGER,
        quality_id: dataTypes.INTEGER,
        vintage: dataTypes.INTEGER,
        display_id: dataTypes.INTEGER,
        price: dataTypes.DECIMAL,
        discount: dataTypes.INTEGER,
        tasting: dataTypes.STRING,
        pairing: dataTypes.STRING,
        temperature_id: dataTypes.INTEGER,
        image: dataTypes.STRING,
        datasheet: dataTypes.STRING,
        state_id: dataTypes.INTEGER
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
        Product.belongsTo(models.Brand, {
            as: "brands",
            foreignKey: "brand_id"
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
        Product.belongsTo(models.State, {
            as: "states",
            foreignKey: "state_id"
        });

        Product.hasMany(models.Cart_product, {
            as: "products",
            foreignKey: "product_id",
        });

    }
    return Product;
}