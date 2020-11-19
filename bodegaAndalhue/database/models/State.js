module.exports = function(sequelize, dataTypes) {
    let alias = "State";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING

    };

    let config = {
        tableName: "states",
        timestamps: false

    }

    let State = sequelize.define(alias, cols, config);

    State.associate = function(models) {
        State.hasMany(models.Product, {
            as: "states",
            foreignKey: "state_id"
        });

    }
    return State;
}