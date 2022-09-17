import express from 'express'
import * as path from 'path'
import bodyParser from 'body-parser'
import namerouter from './routes/name.js'


const app=express()

app.use(express.json())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use("/",namerouter)

app.listen(3000)

console.log("http://localhost:3000");

