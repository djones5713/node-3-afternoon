const express = require("express");
const app = express();
const massive = require("massive");
const products_controller = require("../products_controller");
require("dotenv").config();



massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('connect to db')
}).then(dbInstance => {
    app.set("db", dbInstance);
}).catch(err => console.log(err))

app.use(express.json())

app.post('/api/products', products_controller.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/id', products_controller.update);
app.delete('/api/products/:id', products_controller.delete);


app.listen(3000, () => console.log("the port 3000 is up and running"));