const { response } = require('express');
const express = require('express')
const Budget = require("../models/budget")

const router = express.Router();

router.get('/', (require, response) => {
    response.render("budget/index.ejs", {
        budgets: Budget.getAll()
    })
})

router.get('/:id', (require, response) => {
    response.render('budget/show.ejs', {
        budget: Budget.getOne(require.params.id)
    })
})

module.exports = router