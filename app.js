// require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/login',(req,res)=>{
    res.send('<h1>Please login</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })