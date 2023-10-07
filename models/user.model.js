




const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    phone:Number

})

module.exports =mongoose.model('user',schema)