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
        Cart_product.belongsTo(models.Product, {
            as: "products",
            foreignKey: "product_id",
        });
        Cart_product.belongsTo(models.Cart, {
            as: "carts",
            foreignKey: "cart_id",
        });
    }
    return Cart_product;
}

/* Cart_product.hasMany(models.Category, {
    as: "categories",
    foreignKey: "product_id",
    sourceKey: "product_id"
});
Cart_product.hasMany(models.Brand, {
    as: "brands",
    foreignKey: "product_id",
    sourceKey: "product_id"
});
Cart_product.hasMany(models.Varietal, {
    as: "varietals",
    foreignKey: "product_id",
    sourceKey: "product_id"
});
Cart_product.hasMany(models.Quality, {
    as: "qualities",
    foreignKey: "product_id",
    sourceKey: "product_id"
});
Cart_product.hasMany(models.Display, {
    as: "displays",
    foreignKey: "product_id",
    sourceKey: "product_id"
}); */