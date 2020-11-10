const config = require("../config/config")

module.exports = function(sequelize, dataTypes) {
    let alias = "users";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: dataTypes.STRING,

        last_name: dataTypes.STRING,

        birthdate: dataTypes.DATE,

        address: dataTypes.STRING,

        town: dataTypes.STRING,

        country: dataTypes.STRING,

        email: dataTypes.STRING,

        password: dataTypes.STRING

    };

    let config = {
        tableName: "users",
        timestamps: false

    }

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.hasMany(models.Cart, {
            as: "cart_user",
            foreignKey: "user_id"
        });

        return User;
    }
}