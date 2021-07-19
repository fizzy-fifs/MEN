const express = require('express');
const mongoose = require('mongoose');
const uri = "mongodb+srv://node_tutorial:nodetutorial@cluster0.buwvv.mongodb.net/node_tutorial?retryWrites=true&w=majority"
const alienRouter = require('./router/aliens')

const app = express();

//Connect to mongodb
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB Connected...')
})
.catch(err => console.log(err))

//converts req to json format
app.use(express.json())

//Routes
app.use('/aliens', alienRouter)

app.listen(3000, () => {
  console.log('Server started...')
});
