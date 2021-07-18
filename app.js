const express = require('express');

const app = express();

//Routes
app.get('/', (req, res) => {
  res.send('We are on home')
});

app.get('/posts', (req, res) => {
  res.send('We are posts')
});

app.listen(3000);
