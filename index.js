const express =  require('express')
const app = express()
const path = require('path')
const bodyparser=require('body-parser')

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.json({limit:"1mb"}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'))
})
app.get('/hello',(req,res)=>{
    res.sendFile(path.join(__dirname,'hello.html'))
})
app.listen(3000);
