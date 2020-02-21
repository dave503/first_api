'use strict'

const mongoose = require('mongoose')
const app = require('./app')

const config = require('./config')

/*app.get('/hola/:name', (req, res) => {
    res.send({message: `Hola ${req.params.name}!`})
})*/


mongoose.connect(config.db, (err, res)=>{
    if(err){
        return console.log(`Error: ${err}`)
    }
    console.log('Conexion establecida')
    app.listen(config.port, ()=> {
        console.log(`API REST Corriendo en localhost:${config.port}`)
    })
})


