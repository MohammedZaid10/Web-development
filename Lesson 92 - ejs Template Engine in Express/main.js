const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let siteName = 'Adidas'
  let searchText = 'Search Now'
  let arr = ['Hey', 54 , 55]
  res.render('index', {siteName : siteName, searchText: searchText, arr})
})

app.get('/', (req, res) => {
  let blogTitle = 'Why and when'
  let blogContent = 'its a vvery good brand'
  // res.sendFile('templates/blogpost.html', {root : __dirname})
  res.render('blogpost', {blogTitle: blogTitle, blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
