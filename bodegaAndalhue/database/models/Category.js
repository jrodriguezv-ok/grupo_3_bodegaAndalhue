const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "Categories";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING

    };

    let config = {
        tableName: "Categories",
        timestamps: false

    }

    let Category = sequelize.define(alias, cols, config);

    return Category;
}