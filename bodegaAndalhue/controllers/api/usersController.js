const Sequelize = require('sequelize');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../../database/models');

const usersController = {

    //LISTADO DE PRODUCTOS
    quantityOfUsers: (req, res, next) => {
        db.User.findAll({
<<<<<<< HEAD
                include: [{ association: "carts" }]
=======
                 include: [{ association: "carts" }]
>>>>>>> c9dd7d16a57c1d0315f20d0682893be2f0534903
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