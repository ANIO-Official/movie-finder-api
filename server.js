require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const movieRouter = require('./routes/movieRoutes')

//Routers


//MiddleWare=============
//enable use of req.body when data submitted via JSON
app.use(express.json())
//enable use of req.body when a user submits in HTML form.
app.use(express.urlencoded())
//======================

//Routes
app.get('/', (req, res) =>{
    res.send('<h1>Home Page</h1>')
})
app.use('/api', movieRouter)


//Listener Start...
app.listen(port, () =>{
    console.log(`Server is running: http://localhost:${port} :)`)
})