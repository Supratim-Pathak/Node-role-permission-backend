require('dotenv').config()

const bodyParser = require('body-parser')
const cors = require('cors')

const express = require('express')
const app = express()
const port =  process.env.PORT || 3000

const corsOption = {
    origin: '*'
}

app.use(cors(corsOption))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// ROUTES

const LoginRoutes = require('./routes/Auth/Login')


app.use(LoginRoutes)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
