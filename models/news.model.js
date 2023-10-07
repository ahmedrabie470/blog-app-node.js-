




const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title:String,
    content:String,
   createdBy:mongoose.SchemaTypes.ObjectId,
   
},{
    timestamps:true
})

module.exports =mongoose.model('news',schema)