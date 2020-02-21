'use strict'

const mongoose = require('mongoose')
const User = require('../models/user')
const service = require('../services')

function singUp(req, res){
    const user = new User({
        email: req.body.email,
        displayName : req.body.displayName
        
    })

    user.save((err)=>{
        if(err) res.status(500).send({message: `Error: ${err}`})

        return res.status(200).send({token: service.createToken(user)})
    })

}

function singIn(req, res){
    user.find({email: req.body.email}, (err, user)=>{
        if(err) return res.status(500).send({message: `Error: ${err}`})
        if(!user) return res.status(404).send({message: 'Usuario no existe'})

        req.user = user
        res.status(200).send({
            message: 'Is OK',
            token: service.createToken(user)
        })
    })
}

module.exports = {
    singUp,
    singIn
}