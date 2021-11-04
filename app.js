const express = require('express')
const apiRouter = require('./routes/api.router.js')
const {handleCustomErrors, handlePSQL, handlePSQLNotFound, handle500s} = require("./errors.js")

const app = express()

app.use(express.json())

app.use('/api', apiRouter)

app.all("/*", (req, res, next) => {
    res.status(404).send({msg: "Route not found"})
})

app.use(handleCustomErrors)

app.use(handlePSQLNotFound)

app.use(handlePSQL)

app.use(handle500s)

module.exports = app

// fix serving up json format in GET /api

// handle 422s in post and patch

// check handlePSQLNotFound