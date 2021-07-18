const e = require('express');
const express = require('express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://node_tutorial:nodetutorial@cluster0.buwvv.mongodb.net/node_tutorial?retryWrites=true&w=majority"

const app = express();

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected...')
})
.catch(err => console.log(err))

//Routes
app.get('/', (req, res) => {
  res.send('We are on home')
});

app.get('/posts', (req, res) => {
  res.send('We are posts')
});

app.listen(3000);
