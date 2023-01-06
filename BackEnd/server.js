const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')
const cors = require('cors');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Finding this path
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));


app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//mongodb+srv://admin:<password>@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://Damo:admin@damodatabase.cefelej.mongodb.net/?retryWrites=true&w=majority');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const foodSchema = new mongoose.Schema({
  title: String,
  cover: String,
  description: String,
  author: String
});

const foodModel = mongoose.model('fdgdfgdfgdfg', foodSchema);

app.post('/api/food',(req,res)=>{
  console.log(req.body);

  foodModel.create({
    title: req.body.title,
    cover:req.body.cover,
    description: String,
    author:req.body.author
  })
  
  res.send('Data Recieved');
})

app.get('/api/food', (req, res) => {
  foodModel.find((error, data)=>{
    res.json(data);
  })
})

app.get('/api/food/:id', (req, res)=>{
  console.log(req.params.id);
  foodModel.findById(req.params.id,(error,data)=>{
    res.json(data);
  })
})

app.put('/api/food/:id', (req, res)=>{
  console.log("Update: "+req.params.id);

  foodModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error,data)=>{
      res.send(data);
    })
})

app.delete('/api/food/:id',(req, res)=>{
  console.log('Deleting: '+req.params.id);
  foodModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
    res.send(data);
  })
})
//File is been send to this location
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
  });
  
app.listen(port, () => {
  console.log(`Food app listening on ${port}`)
})