const Sequelize = require('sequelize');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../../database/models');

const usersController = {

    //LISTADO DE PRODUCTOS
    quantityOfUsers: (req, res, next) => {
        db.User.findAll({
                 include: [{ association: "carts" }]
            })
            .then(function(users) {
                
                let respuesta = {
                    meta: {
                           status:200,
                           total: users.length
                    },
                    data: users
                }
                
                console.log("La base cuenta con " + respuesta.data.length + " usuarios registrados!");

                res.json(respuesta);
             })

    },
};

module.exports= usersController;