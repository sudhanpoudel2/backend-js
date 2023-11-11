// console.log("Hello Sudhan");
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Instagram', (req,res) =>{
    res.send('sudhan_poudel')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please login</h1>')
})

app.get('/youtube' , (req,res)=>{
  res.send("Welcome to youtube")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
  })