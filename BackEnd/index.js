import express from "express";
import * as Users from "./Data/data.js";

const app  = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/api/users', (req, res) => {
    res.send(Users)
  })

const port = 9000

app.listen(port ,()=>{
    console.log(`server is running on port : ${port}`);
})