'use strict'

const express = require('express')
const bodyP = require('body-parser')
const app = express()
const api = require('./routes')

app.use(bodyP.urlencoded({extended: false}))
app.use(bodyP.json())
app.use('/api', api)

module.exports = app