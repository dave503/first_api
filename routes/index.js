'use strict'

const express = require('express')
const ProductCntll = require('../controllers/product')
const auth = require('../middleware/auth')
const userCtl = require('../controllers/user')
const api = express.Router()

api.post('/signup',userCtl.singUp)
api.post('/signin', userCtl.singIn)

api.get('/product', ProductCntll.getProducts) 
api.get('/product/:productID', ProductCntll.getProduct)
api.post('/product', ProductCntll.insertProduct)
api.put('/product/:productID', ProductCntll.updateProduct)
api.delete('/product/:productID', ProductCntll.deleteProduct)
api.get('/private', auth, ProductCntll.getProducts)
module.exports = api