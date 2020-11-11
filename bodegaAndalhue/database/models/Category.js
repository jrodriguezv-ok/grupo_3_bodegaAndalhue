const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "Category";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING

    };

    let config = {
        tableName: "categories",
        timestamps: false

    }

    let Category = sequelize.define(alias, cols, config);

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: "categories",
            foreignKey: "cat_id"
        });

    }
    return Category;

}