const joi = require('joi')
methods = [ 'body' , 'params']

 const schema =  { 
    body:joi.object({
        name:joi.string().min(3).max(10).required(),
        email:joi.string().email().required(),
        password:joi.string().pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
        repassword:joi.ref("password"),
        age:joi.number().min(16).max(50).required(),
        phone:joi.number().required()
     }),
     params:joi.object({
        id:joi.string().min(24).max(24).required(),
     }),
 }
 module.exports.userValidation=(req,res,next)=>{
    let errorArray = [];
     methods.map((key)=>{
        
            let {error} =  schema[key].validate(req[key], {abortEarly:false})
            if(error){
            error.details.map((msg)=>{
                errorArray.push(msg.message)
            })
        }
        
            
        
     })
     if(errorArray.length>0){

         res.json(errorArray)
        }else{
            next()
        }
 }
