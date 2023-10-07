const jwt = require('jsonwebtoken')
module.exports.auth=(req,res,next)=>{
    const token = req.header('token')   

    jwt.verify(token, 'secretToken', (err,decoded)=>{
        if(err)
        {
            res.json({message:"token not provided " , err})
        }else{
            req.id=decoded.id
            next();
        }
    })
}