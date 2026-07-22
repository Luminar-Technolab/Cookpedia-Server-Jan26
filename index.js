require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./config/db')
const routes = require('./routes/cookpediaAllRoutes')

const cookpediaServer = express()
cookpediaServer.use(cors())
cookpediaServer.use(express.json())
cookpediaServer.use(routes)
cookpediaServer.use('/uploads',express.static('./uploads'))

const PORT = process.env.PORT

cookpediaServer.listen(PORT,()=>{
    console.log("Cookpedia server started... Waiting for client request!!!");
})

cookpediaServer.use((err,req,res,next)=>{
    res.status(500).json(err.message)
})

cookpediaServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>Cookpedia server started... Waiting for client request!!!</h1>`)
})

