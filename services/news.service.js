const newsModel = require('../models/news.model')

module.exports.addNote=async(req,res)=>{
    const {title,content,createdBy} = req.body 
            await newsModel.insertMany({title,content,createdBy:req.id}); 
            res.json({message:'added'})
        }

module.exports.allNews=async(req,res)=>{
   let news =  await newsModel.find({})
    res.json({news})
}
module.exports.update=async (req , res)=>{
    const {title,content, createdBy} = req.body;
    await newsModel.updateMany({createdBy},{title,content,createdBy})
    res.json({message:"updated"})
    }



module.exports.deletee=async (req,res)=>{
    const {createdBy} = req.body;
    await newsModel.deleteOne({createdBy})
    res.send("deleted")
}

module.exports.allUserBlog = async (req , res)=>{

    const id = req.header('id')
   let news =  await newsModel.find({createdBy:id})
   res.json(news)
}