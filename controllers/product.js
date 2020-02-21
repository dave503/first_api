'use strict'
const Product = require('../models/product')


function getProduct(req, res){
    let productID = req.params.productID

    Product.findById(productID, (err, product)=>{
        if(err) return res.status(500).send({message: `Error: ${err}`})
        if(!product) return res.status(404).send({message: 'No existe'})
        
        res.status(200).send({ product })

    })
}

function getProducts(req, res){
    Product.find({},(err, products)=>{
        if(err) return res.status(500).send({message: `Error: ${err}`})
        if(!products) return res.status(404).send({message: 'No hay productos'})

       res.send(200, {products}) 
    })
}

function updateProduct(req, res){
    let productID = req.params.productID
    let update = req.body
    Product.findByIdAndUpdate(productID, update,(err, ok)=>{
        if(err) res.status(500).send({message: `Erro: ${err}`})

        res.status(200).send({product: ok})
    })
}

function deleteProduct(req, res){
    let productID = req.params.productID

    Product.findById(productID, (err, product)=>{
        if(err) return res.status(500).send({message: `Error: ${err}`})
        
        product.remove(err =>{
            if(err) return res.status(500).send({message: `Error: ${err}`})
            res.status(200).send({message: 'Producto borrado'})
        })
    })
}

function insertProduct(req, res){
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err, ok) => {

        if(err) res.status(500).send({message: `Erro: ${err}`})
        res.status(200).send({message: ok})

    })
}


module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    insertProduct,
    deleteProduct
}