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
const PORT = process.env.PORT || 3001;

//morgan
app.use(morgan('dev'));

//middleware static files
app.use(express.static('public'));



app.get('/api', (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/testdata', (req, res) => {
  try {
    const profiles = Profile.find({});
    // const blogs = await Blog.find({})
    // console.log(profiles);
    res.json(profiles);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server2 error');
  }
});


app.get('/', (req, res) => {
  // res.send('<p>home page</p>');
  res.sendFile('./views/index.html', { root: __dirname });
});

// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
  const profile = new Blog({
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

app.listen(PORT, () => {
  console.log('Server listening on ${PORT}');
});
