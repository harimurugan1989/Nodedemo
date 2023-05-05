const express = require('express');
const morgan= require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const Profile = require('./models/profile');
// express app
const app = express();

const dbURI='mongodb+srv://a2c:2351210eee@cluster0.7oguxyz.mongodb.net/node-tut?retryWrites=true&w=majority';
mongoose.connect(dbURI);

// listen for requests
app.listen(3000);

//morgan
app.use(morgan('dev'));

//middleware static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  res.sendFile('./views/index.html', { root: __dirname });
});

// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
  const profile = new Profile({
    title: 'new blog3',
    snippet: 'about my new blog3',
    body: 'more about my new blog3'
  })
  profile.save()
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  });
});


app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile('./views/about.html', { root: __dirname });
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});