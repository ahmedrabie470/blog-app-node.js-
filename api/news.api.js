const { auth } = require('../middleware/authentication')
const { addNote, allNews, update, deletee, allUserBlog} = require('../services/news.service')

const app = require('express').Router()

app.post('/addNote',auth,addNote)
app.get('/allNews',auth,allNews)
app.delete('/delete',deletee)
app.put('/update',auth,update)
app.get('/userNews',allUserBlog)


module.exports=app