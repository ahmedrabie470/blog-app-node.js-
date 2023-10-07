const userModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports.signup= async(req,res)=>{
    const {name,email,password,age} = req.body;
    const user =await userModel.findOne({email})
    if(user){
        res.json({message:"email already exist"})
    }
    else{
        bcrypt.hash(password,4,async function(err,hash){
            await userModel.insertMany({name,email,password:hash ,age})
            res.json({message:"success"})
        });
        

    };
   
};


module.exports.signIn = async (req , res) =>{
    const {email , password}=req.body
    const user = await userModel.findOne({email})

    if(user)
    {
        const match =await bcrypt.compare(password , user.password)
        if(match)
        {
            // const token = jwt.sign({role:"user",id:user._id,name:user.name},'secretToken')
            res.json({message:"success",token})
        }
        else{
            res.json({message:"incorrect password"})

        }
    }else{
        res.json({message:"email dose't exist"})

    }
}


module.exports.update=async (req , res)=>{
    const {name ,email , password,age,phone, _id} = req.body;
    await userModel.updateMany({_id},{name, email , password,age,phone})
    res.send("updated")
    }



module.exports.deletee=async (req,res)=>{
    const {_id} = req.body;
    await userModel.deleteOne({_id})
    res.send("deleted")
}

module.exports.getAllUser= async(req,res)=>{
    const user =await userModel.find({},{});
    res.json({message:"success",user})
}

module.exports.getAllUserByAge= async(req,res)=>{
    const {age , name , email , password , phone , _id} = req.body
    const user =await userModel.findById({_id},{age , name , email , password , phone});
    if(user>30)
    {
        res.json({message:"success",user})
    }else{
        res.json({message:"your age must be greater  than 30 years"})

    }
}
module.exports.getAllUserByAge= async(req,res)=>{
    const {age , name , email , password , phone , _id} = req.body
    const user =await userModel.findById({_id},{age , name , email , password , phone});
    if(user<=30)
    {
        res.json({message:"success"})
    }else{
        res.json({message:"you must to be less than 30 years "})

    }
}

module.exports.getUserById= async (req , res)=>{
    const {_id} = req.body;
   const user =  await userModel.findById({_id},{password:0 , _id:0})
    res.json({message:"finded" , user})
}
