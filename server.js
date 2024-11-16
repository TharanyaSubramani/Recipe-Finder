const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Define routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Recipe Finder', message: 'Welcome to Recipe Finder!' });
});

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login' });
});

app.get('/signup', (req, res) => {
    res.render('signup', { title: 'Sign Up' });
});

app.get('/drinks', (req, res) => {
  res.render('drinks', { title: 'Drinks' });
});


app.get('/food', (req, res) => {
    res.render('food', { title: 'Food' });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
