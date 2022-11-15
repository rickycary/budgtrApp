const express = require('express')
const Budget = require("../models/budget")

const router = express.Router();

router.get('/', (require, response) => {
    response.render("budget/index.ejs", {
        budgets: Budget.getAll()
    })
})

module.exports = router