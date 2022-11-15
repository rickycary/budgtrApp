const express = require('express')
const Budget = require("../models/budget")

const router = express.Router();

router.get('/', (require, response) => {
    response.send("You hit the budget router")
})

module.exports = router