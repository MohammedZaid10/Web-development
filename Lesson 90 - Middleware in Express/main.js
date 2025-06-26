const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))

app.use('/blog', blog)


// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }
// app.use(myLogger)

// Middleware 1
app.use((req, res, next) => {
    console.log(req.headers)
    req.harry = " I am Harry";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middleware 1")
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('M2')
    req.harry = " I am Rohan";
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')

})

app.get('/about', (req, res) => {
    res.send('Hello About!' + req.harry)
})

app.get('/contact', (req, res) => {
    res.send('Hello Contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})