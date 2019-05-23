
module.exports = {
        create:(req, res, next) => {
            const dbInstance = req.app.get('db');
            const { name, description, price, image_url } = req.body

            dbInstance.create_product([ name, description, price, image_url ])
            .then(() => res.status(200))
            .catch( err => {
            res.status(500).send({err: "Something is wromg"});
            console.log(err)
        })
    },
        getOne:(req,res,next) => {
            const dbInstance = req.app.get('db');
            const { id } = req.pramas;

            dbInstance.read_product(id)
            .then(() => res.status(200).send(product))
            .catch(err => {
                res.status(500).send({err: "Something is wromg"});
                console.log(err)
        })
    },
        getAll:(req,res,next) => {
            const dbInstance = req.app.get('db');
         

            dbInstance.read_products()
            .then(() => res.status(200).send(product))
            .catch(err =>{
                res.status(500).send({err: "Something is wromg"});
                console.log(err)
        })
    },
        update:(req,res,next) => {
            const dbInstance = req.app.get('db');
            const { params, query } = req;

            dbInstance.update_product([pramas.id, query.description])
            .then(res.status(200))
            .catch(err => {
                res.status(500).send({err: "Something is wromg"});
                console.log(err)
        })
    },

        delete: (req,res,next) => {
            const dbInstance = req.app.get('db');
            const { id } = req.pramas;

            dbInstance.delete_product(id)
            .then (res.status(200))
            .catch(err => {
                res.status(500).send({err: "Something is wromg"})
                console.log(err)
            })
        }

}


   
