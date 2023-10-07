const { signup, signIn ,deletee, getUserById, update, getAllUser, getAllUserByAge } = require('../services/user.service')

 const app = require('express').Router()


 app.post('/signup',signup)
 app.post('/signIn',signIn)
 app.put('/update',update)
 app.delete('/delete',deletee)
 app.get('/getUserById',getUserById)
 app.get('/getAllUser',getAllUser)
 app.get('/ getAllUserByAge', getAllUserByAge )







 module.exports=app