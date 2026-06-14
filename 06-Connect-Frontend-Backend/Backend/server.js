import express from 'express'

const app=express()

app.get('/', (req,res)=>{
    res.send("Server Live");
})

app.get('/api/jokes', (req,res)=>{
    const jokes=[
        {
            name:"Manish",
            branch:"Aiml",
            college:"kcc"
        },
        {
            name:"Sahil Khan",
            branch:"CSE(AIML)",
            college:"Gl Bajaj"
        },
        {
            name:"Sahil Khan",
            branch:"CSE(AIML)",
            college:"Gl Bajaj"
        },
        {
            name:"Sahil Khan",
            branch:"CSE(AIML)",
            college:"Gl Bajaj"
        },
        {
            name:"Sahil Khan",
            branch:"CSE(AIML)",
            college:"Gl Bajaj"
        },
        {
            name:"Sahil Khan",
            branch:"CSE(AIML)",
            college:"Gl Bajaj"
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server is Running on PORT${port}`);
})