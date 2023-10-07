const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
app.use(express.json())
app.use('/users',require('./api/user.api'))
app.use('/news',require('./api/news.api'))

mongoose.connect("mongodb://localhost:27017/newsBlog").then(()=>{
    console.log("dataBase connected");
}).catch((err)=>{
console.log(err);
})


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))