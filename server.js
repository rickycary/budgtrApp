// Dependencies
require('dotenv').config()
const express = require('express');
const app = express();
const morgan = require('morgan')
const PORT = process.env.PORT || 3000
const budgetRouter = require("./controllers/budget")

// Middleware
app.use(morgan('tiny'))
app.use("/budget", budgetRouter)

// Routes
app.get('/', (request, response) => {
    response.send('Hello World')
})

// Listening
app.listen(PORT, (reqest, response) => {
    console.log(`Server listening on port: ${PORT}`)
})
