const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About us!')
})

app.get('/contact', (req, res) => {
  res.send('Contact us!')
})

// app.get('/blog', (req, res) => {
//   res.send('Hello Blog!')
// })

app.get('/blog/:slug/', (req, res) => {
  //logic to fetch intro to {slug} from db
    // console.log(req);
    console.log(req.params);
    console.log(req.query);
    // Example app listening on port 3000
    // { slug: 'intro-to-padosi' }
    // { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
})

app.get('/blog/:slug/:second', (req, res) => {
  //logic to fetch intro to js from db
    console.log(req.params);
    console.log(req.query);
    // Example app listening on port 3000
    // { slug: 'intro-to-padosi', second: 'intro-to' }
    res.send(`hello ${req.params.slug} and ${req.params.second}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//   //logic to fetch intro to js from db
//     res.send('Intro to JavaScript!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//   //logic to fetch intro to js from db
//     res.send('Intro to Python!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})