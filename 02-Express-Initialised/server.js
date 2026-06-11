const express= require('express');

const app =express()  // server instance create

app.get('/', (req,res)=>{
    res.send("Hello World")
})

app.get('/About',(req,res)=>{
    res.send("about PAge")
})
// not case Sensitive About or about

app.listen(3000) // for start server