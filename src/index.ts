import express = require('express');
const app = express()
import bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const products = [{id: 1, title: "tomato"},{id: 2, title: "orange"}]
const addresses = [{id: 1, value: "Nezalejnasti 12"},{id: 2, value: "Selickaga 11"}]
app.use(bodyParser.json());

console.log(" commit")
app.get('/products', (req, res) => {
    if(req.query.title){
        let searchString = req.query.title.toString();
        res.send( products.filter(p => p.title.indexOf(searchString) > -1));
    } else {
        res.send(products)
    }
})
app.post('/products', (req, res) => {
    const newProduct = {
         id: +(new Date()),
         title: req.body.title
    }
    products.push(newProduct)
    res.status(201).send(newProduct)


})
app.get('/products/:id', (req, res) => {
    let product = products.find(p => p.id ===  +req.params.id);
    if(product){
        res.send(product)
    }else {
        res.sendStatus(404);
    }

})
app.put('/products/:id', (req, res) => {
    let product = products.find(p => p.id ===  +req.params.id);
    if(product){
        product.title = req.body.title
        res.status(200).send(product)
    }else {
        res.sendStatus(404);
    }

})
app.delete('/products/:id', (req, res) => {
         for( let i = 0; i < products.length; i++){
             if(products[i].id === +req.params.id) {
                 products.splice(i, 1);
                 res.send(204)
                 return
             }

         }
    res.sendStatus(404);
})
app.get('/addresses', (req, res) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req, res) => {
    let address = addresses.find(p => p.id === +req.params.id);
    if (address) {
        res.send(address)
    } else {
        res.sendStatus(404);
    }
    res.send(addresses)
})
console.log("я разобрался с коммитами")
console.log("новый dev branch")
console.log("commit 2")
console.log("commit 3")

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) })

// вопрос про гетигнор (файлы вручную добавлял в коммит )